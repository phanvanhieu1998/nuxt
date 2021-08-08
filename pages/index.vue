<template>
  <div>
    <ScyllaCound></ScyllaCound>
    <ScyllaCloudPricing></ScyllaCloudPricing>
    <Calculator />
    <Footer></Footer>
  </div>
</template>

<script>
import ScyllaCound from "@/components/content/SectionScyllaCloud.vue";
import ScyllaCloudPricing from "@/components/content/ScyllaCloudPricing.vue";
import Calculator from "@/components/content/Calculator.vue";
import Footer from "@/components/content/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    ScyllaCound,
    ScyllaCloudPricing,
    Calculator,
    Footer
  }
};
</script>
<style scoped></style>
