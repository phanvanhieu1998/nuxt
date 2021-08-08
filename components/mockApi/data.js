let calculator = [
  {
    title: "Read ops/sec",
    opsLeft: "10 ops/sec",
    opsRight: "1M ops/sec",
    value: 300000,
    pullValue: 80
  },
  {
    title: "Write ops/sec",
    opsLeft: "10 ops/sec",
    opsRight: "1M ops/sec",
    value: 10000000,
    pullValue: 40
  },
  {
    title: "Average item size (KB)",
    opsLeft: 1,
    opsRight: 20,
    value: 5,
    pullValue: 80
  },
  {
    title: "Storage set size (GB)",
    opsLeft: 10,
    opsRight: 2000,
    value: 5,
    pullValue: 80
  },
  {
    title: "Replication factor",
    opsLeft: "",
    opsRight: "",
    value: "",
    pullValue: 10,
    status: true
  }
];
let listOverview = [
  {
    title: "Overview",
    class: "overview"
  },
  {
    title: "Pricing",
    class: "pricing"
  },
  {
    title: "FAQ",
    class: "faq"
  }
];
let listInfomation = [
  {
    name: "Contact",
    slug: "contact"
  },
  {
    name: "Pricing",
    slug: "pricing"
  },
  {
    name: "Custumer Portal",
    slug: "custumer-portal"
  }
];

let buttonNavigation = [
  {
    name: "Downloads",
    class: "dowloads"
  },
  {
    name: "Scylla Cloud",
    class: "scylla--clound"
  },
  {
    name: "Live Test",
    class: "live--test"
  }
];
let listNavigation = [
  {
    name: "PRODUCTS",
    slug: "products"
  },
  {
    name: "USERS",
    slug: "user"
  },
  {
    name: "OPEN SOURCE",
    slug: "custumer-portal"
  },
  {
    name: "LEARNING",
    slug: "learning"
  },
  {
    name: "BLOG",
    slug: "blog"
  },
  {
    name: "COMPANY",
    slug: "company"
  }
];

let ClusterCapacity = [
  {
    text: "Storage (post replication)",
    value: 950,
    ops: "GB"
  },
  {
    text: "Sustained throughput	",
    value: "47,520",
    ops: "ops/sec"
  },
  {
    text: "Peak throughput",
    value: "72,000 ",
    ops: "ops/sec"
  }
];

let ClusterSpecs = [
  {
    text: "Nodes",
    value: "3 x i3.2xlarge",
    ops: "(8 vCPUs, 61GB RAM, 1,900GB storage)"
  },
  {
    text: "Total raw storage",
    value: "5,700",
    ops: "GB"
  },
  {
    text: "Total vCPU	",
    value: "24"
  }
];
export {
  calculator,
  listOverview,
  listInfomation,
  buttonNavigation,
  listNavigation,
  ClusterCapacity,
  ClusterSpecs
};
