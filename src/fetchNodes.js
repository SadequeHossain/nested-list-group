export default function fetchNodes() {
  return [
    {
      label: "Websites",
      children: [
        {
          label: "Ecommerce",
          children: [
            {
              url: "http://www.amazon.com",
              label: "Amazon!"
            },
            {
              url: "http://www.ebay.com",
              label: "Ebay"
            },
            {
              url: "http://www.hp.com",
              label: "Hewlitt-Packard"
            }
          ]
        },
        {
          label: "Old Time",
          children: [
            {
              url: "http://www.yahoo.com",
              label: "Yahoo!"
            },
            {
              url: "http://www.jcp.com",
              label: "JC Penney"
            },
            {
              url: "http://www.compac.com",
              label: "Compac"
            }
          ]
        }
      ]
    },
    {
      label: "Documents",
      children: [
        {
          label: "More Docs",
          children: [
            {
              url: "http://localhost:8443/ImportantDoc.pdf",
              label: "Important.pdf"
            },
            {
              url: "http://localhost:8443/AnotherImportantDoc.pdf",
              label: "AnotherImportantDoc.pdf"
            },
            {
              url: "http://localhost:8443/AnotherDoc.pdf",
              label: "AnotherDoc.pdf"
            }
          ]
        },
        {
          label: "Fun Docs",
          children: [
            {
              url: "http://localhost:8443/ImportantDoc.pdf",
              label: "Important.pdf"
            },
            {
              url: "http://localhost:8443/AnotherImportantDoc.pdf",
              label: "AnotherImportantDoc.pdf"
            },
            {
              url: "http://localhost:8443/AnotherDoc.pdf",
              label: "AnotherDoc.pdf"
            }
          ]
        }
      ]
    }
  ];
}
