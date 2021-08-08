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
              <div class="total_payment">
                <h4>Your total payment will be</h4>
                <span>On Demand</span>
                <div class="payment">
                  <div class="price">
                    $2,866.71
                  </div>

                  <div style="	line-height: 45px;">
                    Details
                  </div>
                </div>
                <span style="color:blue">Technical Specs</span><br />
                <div style="margin:16px 0 16px 0">
                  <span>Cluster capacity</span>
                </div>

                <div class="cluster_capacity">
                  <div
                    v-for="(item, index) in ClusterCapacity"
                    :key="index"
                    class="cluster_capacity_common"
                  >
                    <div class="storage">
                      <span>{{ item.text }} </span>
                    </div>

                    <div class="cluster_capacity_value">
                      <div
                        style="font-weight:900;display: inline-block;font-size:12px"
                      >
                        {{ item.value }}
                      </div>
                      {{ item.ops }}
                    </div>
                  </div>
                </div>
                <div style="margin:16px 0 16px 0">
                  <span>Cluster specs</span>
                </div>

                <div class="cluster_capacity">
                  <div
                    v-for="(item, index) in ClusterSpecs"
                    :key="index"
                    class="cluster_capacity_common"
                  >
                    <div class="storage">
                      <span>{{ item.text }} </span>
                    </div>

                    <div>
                      <div
                        style="font-weight:900;display: inline-block;font-size:12px"
                      >
                        {{ item.value }}
                      </div>
                      <div style="display: inline-block;font-size:12px">
                        {{ item.ops }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {
  calculator,
  ClusterCapacity,
  ClusterSpecs
} from "@/components/mockApi/data";
export default {
  data() {
    return {
      ClusterSpecs: ClusterSpecs,
      ClusterCapacity: ClusterCapacity,
      calculator: calculator,
      value2: 50,
      value1: false
    };
  }
};
</script>

<style></style>
