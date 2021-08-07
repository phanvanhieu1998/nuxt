<!-- Please remove this file from your project -->
<template>
  <div class="hihi">
    <div class="container header">
      <div class="header--infomation">
        <ul>
          <li v-for="(item, index) in listInfomation" :key="index">
            <nuxt-link :to="item.slug">{{ item.name }}</nuxt-link>
          </li>
        </ul>
        <img src="@/static/images/search-solid.svg" />
      </div>

      <div class="header--bottom">
        <el-row>
          <el-col :span="4">
            <div>
              <img src="@/static/images/Capture.png" /></div
          ></el-col>
          <el-col :span="12">
            <div class="header--navigation">
              <ul>
                <li v-for="(item, index) in listNavigation" :key="index">
                  <nuxt-link :to="item.slug">{{ item.name }}</nuxt-link>
                </li>
              </ul>
            </div></el-col
          >
          <el-col :span="8">
            <div class="button--navigation">
              <el-button
                class="button--common"
                :class="`button--${item.class}`"
                v-for="(item, index) in buttonNavigation"
                :key="index"
                size="mini"
                >{{ item.name }}</el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import {
  listInfomation,
  buttonNavigation,
  listNavigation
} from "@/components/mockApi/data";
export default {
  data() {
    return {
      listInfomation: listInfomation,
      buttonNavigation: buttonNavigation,
      listNavigation: listNavigation
    };
  }
  // components: {
  //   Headers
  //  }
};
</script>

<style>
.hihi {
  border-bottom: 3px solid #e0e0e0;
}
</style>
