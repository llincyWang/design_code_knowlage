import type { TreeNode } from "@/types";

export const orderCardTree: TreeNode = {
  name: "OrderCard",
  children: [
    {
      name: "Header",
      children: [{ name: "OrderStatus", tag: "1" }, { name: "OrderTime" }],
    },
    { name: "ProductInfo", tag: "2" },
    { name: "BuyerInfo", tag: "3" },
    { name: "PriceInfo", tag: "4" },
    { name: "ActionGroup", tag: "5" },
  ],
};
