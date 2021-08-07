<template>
  <div>
    <ScyllaCound></ScyllaCound>
    <ScyllaCloudPricing></ScyllaCloudPricing>
    <Calculator />
  </div>
</template>

<script>
import ScyllaCound from "@/components/content/SectionScyllaCloud.vue";
import ScyllaCloudPricing from "@/components/content/ScyllaCloudPricing.vue";
import Calculator from "@/components/content/Calculator.vue";
export default {
  data() {
    return {};
  },
  components: {
    ScyllaCound,
    ScyllaCloudPricing,
    Calculator
  }
};
</script>
<style scoped></style>
