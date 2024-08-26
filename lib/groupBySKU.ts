import { Product } from "@/typings/productTypings";


export function groupBySKU(products:Product[]): Record<string, Product[]>{
    return products?.reduce((accum:Record<string, Product[]>,currentProduct:Product ) => {
        const sku = currentProduct.meta.sku
        if(!accum[sku]){
            accum[sku] = []
        }
        accum[sku].push(currentProduct)

        return accum
    }, {})
}