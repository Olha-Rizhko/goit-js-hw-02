function getShippingCost(country) {
    const priceToChina = 100;
    const priceToChile = 250;
    const priceToAustralia = 170;
    const priceToJamaica = 120;

    switch (country) {
        case "China":
            return `Shipping to ${country} will cost ${priceToChina} credits`;
            break;
        case "Chile":
            return `Shipping to ${country} will cost ${priceToChile} credits`;
            break;
        case "Australia":
            return `Shipping to ${country} will cost ${priceToAustralia} credits`;
            break;
        case "Jamaica":
            return `Shipping to ${country} will cost ${priceToJamaica} credits`;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }
}


//results
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"