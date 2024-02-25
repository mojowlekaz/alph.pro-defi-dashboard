import { computed, ref } from "vue";
import { usePrices } from "./usePrices";

export type Currency = "USD" | "BTC" | "ALPH" | "ETH";

const currency = ref<Currency>("USD");

function setCurrency(currency_: Currency) {
	currency.value = currency_;
}

const cryptoSymbols = {
	ALPH: "ℵ",
	ETH: "Ξ",
	BTC: "₿",
};

function formatCrypto(currency_: keyof typeof cryptoSymbols) {
	const currency = currency_ === "ALPH" ? "ETH" : currency_;
	return {
		format: (amount: number) => {
			const options = { style: "currency", currency, minimumFractionDigits: 8 };
			const numberFormat = new Intl.NumberFormat("en-US", options);
			const parts = numberFormat.formatToParts(amount);

			return parts.reduce((acc, part) => {
				switch (part.type) {
					case "currency": {
						console.log({ acc, cur: cryptoSymbols[currency] });
						// do whatever you need with the symbol.
						// here I just replace it with the value from the map
						return `${acc}${cryptoSymbols[currency_]}`;
					}
					default:
						return `${acc}${part.value}`;
				}
			}, "");
		},
	};
}

const formatters = {
	USD: new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}),
	BTC: formatCrypto("BTC"),
	ETH: formatCrypto("ETH"),
	ALPH: formatCrypto("ALPH"),
};

export function formatCurrency(number: number, currency: Currency) {
	return formatters[currency].format(number);
}
export function useCurrency() {
	const { prices } = usePrices();
	const commonPrices = computed(() => {
		return {
			// biome-ignore lint/complexity/useLiteralKeys: token address
			ETH: prices["vP6XSUyjmgWCB2B9tD5Rqun56WJqDdExWnfwZVEqzhQb"],
			// biome-ignore lint/complexity/useLiteralKeys: token address
			BTC: prices["xUTp3RXGJ1fJpCGqsAY6GgyfRQ3WQ1MdcYR1SiwndAbR"],
			// biome-ignore lint/complexity/useLiteralKeys: token address
			ALPH: prices["tgx7VNFoP9DJiFMFgXXtafQZkUvyEdDHT9ryamHJYrjq"],
			USD: 1, // prices in usd by default,
		};
	});

	return {
		currency,
		setCurrency,
		format: (n: number, cur = currency.value) => {
			const offset = commonPrices.value[cur];
			return formatCurrency(n / offset, cur);
		},
	};
}