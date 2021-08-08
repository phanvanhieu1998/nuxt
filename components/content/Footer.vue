<template>
  <div class="container">
    <div>
      <el-row :gutter="20">
        <el-col :span="16" :offset="4"
          ><div class="grid-content bg-purple">
            <div style="text-align: center;    margin: 20px 0 30px;">
              <el-button type="primary">Launch Cluster</el-button>
            </div>
            <div style="text-align: center;    margin: 100px 0 20px;">
              <p style="margin:0;color:#888">
                *Where a direct comparison plan is not available, the cost of
                the
              </p>
              <p style="margin:0;color:#888">
                closest comparable plan is shown. Please see for more
                information.
              </p>
            </div>
          </div></el-col
        >
      </el-row>
    </div>

    <div>
      <div>
        <el-row :gutter="20">
          <el-col :span="16" :offset="4"
            ><div class="grid-content bg-purple">
              <div style="text-align: center;">
                <p style="   color: #888;  font-size: 25px;">
                  Annual Reserved Pricing (Monthly Billing) ***
                </p>
              </div>
              <div style="text-align: center;">
                <p
                  style="    font-size: 19px;
    color: #888;"
                >
                  The following are based on AWS US-East-1 Region (N.Va).Pricing
                  are subject to change. You will be able to get a more detailed
                  cost estimate for your region once you are signed up for the
                  Scylla Cloud servive
                </p>
              </div>
            </div></el-col
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
