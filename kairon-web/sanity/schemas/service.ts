const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "tier",
      title: "Tier",
      type: "string",
      options: { list: ["starter", "growth", "enterprise"] },
    },
    { name: "price", title: "Price", type: "string" },
    {
      name: "priceType",
      title: "Price Type",
      type: "string",
      options: { list: ["one-time", "monthly", "custom"] },
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "popular",
      title: "Popular",
      type: "boolean",
      initialValue: false,
    },
    { name: "order", title: "Sort Order", type: "number" },
  ],
  preview: {
    select: { title: "title", subtitle: "price" },
  },
};

export default service;
