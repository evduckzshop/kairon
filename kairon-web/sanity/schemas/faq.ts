const faq = {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["general", "pricing", "technical", "process"],
      },
    },
    { name: "order", title: "Sort Order", type: "number" },
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
};

export default faq;
