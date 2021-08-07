<template>
  <div class="container ">
    <div class="calculator">
      <div>
        <img src="@/static/images/Capture2.png" />
      </div>
      <div>
        <h3>
          Start with our Calculator
        </h3>
      </div>
      <div>
        <span>
          Compare cost per month
        </span>
      </div>
    </div>

    <div>
      <el-row>
        <el-col :span="10">
          <el-card class="box-card box-card1">
            <div
              class="content_calculator"
              v-for="(item, index) in calculator"
              :key="index"
            >
              <el-row>
                <el-col class="card-left" :span="19">
                  <div>
                    <h3>{{ item.title }}</h3>
                  </div>
                  <div class="block">
                    <el-slider v-model="item.pullValue"></el-slider>
                  </div>
                  <div class="content_calculator--ops">
                    <div>{{ item.opsLeft }}</div>

                    <div>{{ item.opsRight }}</div>
                  </div>
                </el-col>

                <el-col :span="5">
                  <div class="pull_value">
                    <el-input v-model="item.value" clearable> </el-input>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="14">
          <el-card class="box-card box-card2">
            <div slot="header" class="clearfix">
              <span style=" font-weight: 600;margin-right:10px"
                >Bill Monthly</span
              >
              <el-switch v-model="value1"> </el-switch>
              <span style=" font-weight: 600;margin-left:10px"
                >Bill Annually</span
              >
              <span style=" font-weight: 600; color:green;font-size:12px"
                >Save 15%</span
              >
              <el-button
                style="float: right; padding: 10px 20px; with:120px; border: 2px solid #409EFF;margin-top:-8px"
                type="text"
                >Full Detail</el-button
              >
            </div>
            <div>
              hihi
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { calculator } from "@/components/mockApi/data";
export default {
  data() {
    return {
      calculator: calculator,
      value2: 50,
      value1: false
    };
  }
};
</script>

<style></style>
