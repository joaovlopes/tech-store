import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";

const CategoryProducts = async ({params}: any) => {
    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        include: {
            products: true,
        },
    })

    if (!category) {
        return null
    }

    return (
        <div className="p-5 flex flex-col gap-8">
            <Badge className="w-fit gap-1 text-base border-2 border-primary uppercase px-3 py-[0.375rem]" variant="outline">
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category.name}
            </Badge>

            <div className="grid grid-cols-2 gap-8">
                {category.products.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>)}
            </div>
        </div>
    );
}

export default CategoryProducts;