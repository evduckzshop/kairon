const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    { name: "company", title: "Company", type: "string" },
    { name: "role", title: "Role", type: "string" },
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: { min: (n: number) => { max: (n: number) => unknown } }) =>
        Rule.min(1).max(5),
    },
    { name: "industry", title: "Industry", type: "string" },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: { title: "name", subtitle: "company", media: "avatar" },
  },
};

export default testimonial;
