<template>
  <div class="index-warp">
    <p class="tit">广州公办小学查询系统</p>
    <div style="margin: auto; background: #ffffff">
      <div class="search">
        <p class="search-tit">所在地段或小学关键字：</p>
        <div class="search-panel">
          <input class="search-input" v-model="keyword" type="text" placeholder="如：天河南街">
        </div>
        <div class="btn-panel">
          <button class="search-btn" @click="searchSchool">搜索学校</button>
        </div>
      </div>
      <div class="instructions" v-if="showInstructions">
        <p style="font-weight: bold;">使用说明：</p>
        <div class="content">
          <ol>
            <li>在上方搜索框中输入您所在的地段关键字或者您想查询的小学名称，如前进小学、天河南街。</li>
            <li>点击“搜索学校”按钮，进入结果页面。</li>
            <li>系统由广东广播电视台房产频道整理。</li>
            <li>如有错误，请通过<a href="http://h5.kanlouyi.com/app#/proposal" style="color: #ff6600">意见反馈</a>告知我们，非常感谢！</li>
          </ol>
        </div>
      </div>
      <div class="result-panel" v-else>
        <div class="table table-striped" v-if="schoolList.length > 0">
          <div class="tr">
            <div class="th" width="60">辖区</div>
            <div class="th" width="60">学校</div>
            <div class="th flexdiv">招生服务地段</div>
          </div>
          <div class="tr" v-for="(item, index) in schoolList" :key="item.id">
            <div class="td">{{item.region}}</div>
            <div class="td">{{item.school_name}}</div>
            <div class="td flexdiv">
              <ul>
                <li v-for="(sectionItem, sectionItemIndex) in item.section" :key="sectionItem">{{sectionItem}}</li>
              </ul>
            </div>
          </div>
        </div>
        <p style="font-weight: bold" v-else>数据库中无对应记录{{schoolList.length}}</p>
        <div class="result-btn-panel" v-if="schoolList.length > 0">
          <button class="back" @click="back">返回首页</button>
          <!--<mt-button type="small" class="feedback">意见反馈</mt-button>-->
        </div>
      </div>
    </div>
    <div class="footer">
      <span>广东广播电视台房产频道@版权所有</span>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showInstructions: true,
      keyword: '',
      schoolList: []
    }
  },
  components: {
  },
  created() {
    console.log(this.env);
  },
  methods: {
    searchSchool() {
      if (this.keyword) {
        this.httpGet(this.API.school, {keywords: this.keyword}).then((res) => {
          if (res) {
            console.log(res);
            this.showInstructions = false
            this.schoolList = res.data.list
            this.schoolList.forEach((elem) => {
              elem.section = elem.section.split('|')
            })
            console.log('schoolList::', this.schoolList);
          }
        })
      } else {
        this.showInstructions = true
      }
    },
    back () {
      this.showInstructions = true
      this.schoolList = []
    },
    gotoGame (path) {
      this.reLaunchPageTo(this.router + path)
    }
  }
}
</script>
<style lang="scss">
  .index-warp{
    font-size: .7rem;
    margin: auto;
    .tit,.footer,.search,.instructions,.result-panel{
      max-width: 750px;
      margin: auto;
    }
    .tit{
      font-size: .8rem;
      color: #dd4814;
      padding: 1rem;
      text-align: center;
    }
    .search{
      background: #ffffff;
      padding: 1rem 0;
      padding: 1rem;
      font-size: .7rem;
      .search-tit{
      }
      .search-panel{
        .search-input{
          height: 2rem;
          width: 100%;
          border: none;
          border: 1px solid #e5e5e5;
          border-radius: 5px;
          padding-left: .5rem;
          box-sizing: border-box;
          font-size: .8rem;
          display: block;
        }
      }
      .btn-panel{
        padding-top: 1rem;
        text-align: left;
        .search-btn{
          background: #ff6600;
          color: #ffffff;
          width: 100px;
          height: 35px;
          line-height: 35px;
          display: inline-block;
          font-size: .8rem;
        }
      }
    }
    .instructions{
      font-size: .7rem;
      background: #ffffff;
      padding: 1rem 1rem 2rem 1rem;
      .content{
        /*white-space: pre-wrap;
        word-break: break-all;*/
        ol{
          margin: 0;
          line-height: 1.5;
        }
      }
    }
    .footer{
      padding: 2rem 1rem;
      text-align: center;
      font-size: .7rem;
    }
    .result-panel{
      background: #ffffff;
      padding: 1rem;
      table{
        background: #ffffff;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        td,th{
          border-top: 1px solid #dddddd;
          padding: .5rem .5rem;
          vertical-align: top;
          ul{
            margin: 0;
            padding: 0;
            padding-left: 1rem;
            li{
              list-style:disc;
            }
          }
        }
        th{
          text-align: left;
        }
      }
      .result-btn-panel{
        text-align: center;
        padding: 2rem 1rem 0rem 1rem;
        .back{
          background: #ff6600;
          color: #ffffff;
          margin-right: 1rem;
        }
        .feedback{
          background: #aea79f;
          color: #ffffff;
        }
      }
    }

    .table {
      border-right: 0;
      border-bottom: 0;
      width: 98%;
    }
    .tr {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #dadada;
    }
    .tr:first-child{
      border-top: 1px solid #dadada;
    }
    .tr:last-child{
      border-bottom: none;
    }
    .th,.td {
      padding: 10px;
      text-align: left;
      width:100%;
      flex: 1;
    }
    .th {
      font-weight: 400;
      text-align: left;
      font-weight: bold;
    }
    .spot{
      display: inline-block;
      border-radius: 50%;
      width: 4px;
      height: 4px;
      margin-right: 5px;
      background: #333;
      vertical-align: middle;
    }
    .flexdiv{
      flex: 2
    }
  }
</style>
