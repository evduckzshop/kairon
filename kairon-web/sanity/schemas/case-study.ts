const caseStudy = {
  name: "caseStudy",
  title: "Case Study",
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
      name: "client",
      title: "Client Name",
      type: "string",
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          "Trades & Home Services",
          "Auto Repair",
          "Insurance",
          "Accounting",
          "Professional Services",
          "Other",
        ],
      },
    },
    {
      name: "challenge",
      title: "The Challenge",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "approach",
      title: "Our Approach",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "results",
      title: "Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "metric", title: "Metric", type: "string" },
            { name: "before", title: "Before", type: "string" },
            { name: "after", title: "After", type: "string" },
          ],
        },
      ],
    },
    {
      name: "testimonial",
      title: "Testimonial",
      type: "reference",
      to: [{ type: "testimonial" }],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "heroImage" },
  },
};

export default caseStudy;
