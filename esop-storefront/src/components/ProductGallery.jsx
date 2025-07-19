import { listProducts } from "@lib/data/products"
import { Text } from "@medusajs/ui"
import ProductPreview from "@modules/products/components/product-preview"
import styles from "./ProductGallery.module.css"

export default async function ProductGallery({ countryCode }) {
  try {
    const { response } = await listProducts({ limit: 8, countryCode })
    const products = response.products

    if (!products.length) {
      return (
        <div className="w-full flex justify-center items-center py-12">
          <Text className="txt-large">No products found.</Text>
        </div>
      )
    }

    return (
      <ul className={styles.gallery}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} region={product.region} />
          </li>
        ))}
      </ul>
    )
  } catch (error) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <Text className="txt-large text-ui-fg-error">Error loading products</Text>
      </div>
    )
  }
} 