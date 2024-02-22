import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";
import Link from "next/link";

interface ProductItemProps {
    product: ProductWithTotalPrice;
}

const ProductItem = ({product}:ProductItemProps) => {
    return (
        <Link href={`/product/${product.slug}`}>
            <div className="flex flex-col gap-4">
                <div className="relative bg-accent rounded-lg h-[170px] w-full flex items-center justify-center">
                    <Image 
                        src={"/products/" + product.slug + '/' + product.imageUrls[0]}
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="h-auto max-h-[70%] w-auto max-w-[80%]"
                        style={{
                            objectFit: "contain",
                        }}
                        alt={product.name}
                    />

                    {product.discountPercentage > 0 && (
                        <Badge className="absolute left-3 top-3 px-3 py-[2px]">
                            <ArrowDownIcon size={14} />{product.discountPercentage}%
                        </Badge>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-sm">
                        {product.name}
                    </p>

                    <div className="flex items-center gap-2">
                        {product.discountPercentage > 0 ? (
                            <>
                                <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>

                                <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice.toFixed(2))}</p>
                            </>
                        ) : (
                            <p className="font-semibold text-sm">R$ {product.basePrice.toFixed(2)}</p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem;