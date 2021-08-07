<template>
  <div class="container wrap--content">
    <div class="overview_pricing_faq">
      <div>
        <el-button
          @click="selectBottom(item.title)"
          round
          class="overview_pricing_faq--common"
          :class="[
            `bottom--${item.class}`,
            { 'button-current': currentButtom == item.title }
          ]"
          v-for="(item, index) in listOverview"
          :key="index"
        >
          {{ item.title }}
        </el-button>
      </div>
    </div>

    <div class="content__scylla__cloud__pricing">
      <div>
        <img src="@/static/images/Capture1.png" />
      </div>

      <div>
        <h2>Scylla Cloud Pricing</h2>
      </div>

      <div class="content__scylla__cloud__pricing--text">
        <el-row :gutter="20">
          <el-col :span="16" :offset="4"
            ><div class="grid-content bg-purple">
              <p>
                Pricing for Scylla Cloud is based on the type of servers and
                number of servers that your workload reques.Scylla workt with
                the leaning cloud providers (initially AWS) to user to you.
                Included with your price are automated backup at no extra charge
                that Amazon DynamoDB piles on to your base cost. Click on the
                Rigister tab above to sign up for scylla Cloud now. We'll notify
                you when it's available.
              </p>
            </div></el-col
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { listOverview } from "@/components/mockApi/data";
export default {
  data() {
    return {
      listOverview: listOverview,
      currentButtom: "Pricing"
    };
  },
  methods: {
    selectBottom(current) {
      console.log(current);
      this.currentButtom = current;
    }
  }
};
</script>

<style></style>
