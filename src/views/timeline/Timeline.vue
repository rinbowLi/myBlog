<template>
  <div class="timeline">
    <div class="hearder-box">
      <img src="@/assets/timeline.jpg" alt />
    </div>
    <div class="axis-content">
      <ul class="axis-list">
        <li class="axis-item" v-for="item in timelineList" :key="item.id">
          <div class="loc-icon">
            <i class="iconfont icon-weizhi"></i>
          </div>
          <div class="axis-container animated fadeInUp">
            <p class="axis-sub">{{item.content}}</p>
            <p class="axis-time">{{item.time}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { selectTimeline } from "@/network/timeline";
import { getFormatTime } from "@/utils/utils";
export default {
  name: "Timeline",
  data() {
    return {
      timelineList: []
    };
  },
  mounted() {
    this.loadTimeline();
  },
  methods: {
    loadTimeline() {
      selectTimeline()
        .then(res => {
          console.log(res);
          this.timelineList = res.data;
          this.timelineList.map(v => {
            v.time = getFormatTime(v.time);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.timeline {
  background-color: #ffffff;
  margin-top: 64px;
  .hearder-box img {
    width: 100%;
    height: 150px;
    min-width: 100%;
  }

  .axis-content {
    background-color: #fff;
    .axis-list {
      background-color: #fff;
      border-radius: 6px;
      max-width: 1170px;
      margin: -80px auto 0;
      position: relative;
      padding: 30px 0 60px;
      li:nth-of-type(2n) .axis-container {
        flex-flow: row-reverse;
      }
      li:nth-of-type(2n) .axis-time {
        margin-right: 120px;
      }
      .axis-item {
        list-style: none;
        .loc-icon {
          width: 40px;
          height: 40px;
          background-color: #6a70ec;
          -webkit-box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
            0 3px 0 4px rgba(0, 0, 0, 0.05);
          box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
            0 3px 0 4px rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          position: relative;
          left: 48.5%;
          top: 40px;
          i {
            font-size: 18px;
            display: block;
            height: 18px;
            width: 18px;
            color: #fff;
          }
        }
        .axis-container {
          display: flex;
          padding: 0 40px;
          .axis-sub {
            width: 45%;
            color: #4c416c;
            background-color: #f5f6f9;
            padding: 25px;
            border-radius: 6px;
            box-sizing: border-box;
          }
          .axis-time {
            color: #a8aebf;
            text-align: center;
            margin-left: 120px;
            font-size: 13px;
            line-height: 40px;
          }
        }
      }
    }
    .axis-list::before {
      content: "";
      position: absolute;
      background-color: #e5e8f1;
      height: 100%;
      width: 4px;
      top: 0;
      left: 50%;
    }
  }
}
</style>