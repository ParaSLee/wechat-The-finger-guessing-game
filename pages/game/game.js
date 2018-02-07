// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    computer: null,
    computerChoice: "?",
    human: null,
    gameResult: null,     //0输，1赢，2平
    dogfallTime: 0, //平
    winTime: 0,
    loseTime: 0,
    alertTxt: "WINNER 看黄片",
    btnTxt: "看黄片 GO! ",
    hiddenContent: true,
    yourChoice: [{
      name: "石头",
      val: 0
    },{
      name: "剪刀",
      val: 1
    },{
      name: "布",
      val: 2
    }],
  },
  showResult(e) {
    this.setData({ human: e.target.dataset.choice });
    let num = Math.round(Math.random() * 2);
    this.setData({ computer: num });
    this.setComputer();
    this.YelloCityPK();
  },
  setComputer() {
    if (this.data.computer === 0 ) {
      this.setData({ computerChoice: "石头" });
    } else if (this.data.computer === 1) {
      this.setData({ computerChoice: "剪刀" });
    } else {
      this.setData({ computerChoice: "布" });
    }
  },
  YelloCityPK() {
    let newThis = this.data;
    if (newThis.human === 0) {
      if (newThis.computer === 2) {
        this.setData({ loseTime: newThis.loseTime+1 });
        this.setData({ alertTxt: "LOSE.." });
      } else if (newThis.computer === 0) {
        this.setData({ dogfallTime: newThis.dogfallTime+1 });
        this.setData({ alertTxt: "dogfall" });
      } else if (newThis.computer === 1) {
        this.setData({ winTime: newThis.winTime+1 });
        this.setData({ alertTxt: "WIN!" });
      }
    } else if (newThis.human === 1) {
      if (newThis.computer === 0) {
        this.setData({ loseTime: newThis.loseTime + 1 });
        this.setData({ alertTxt: "LOSE.." });
      } else if (newThis.computer === 1) {
        this.setData({ dogfallTime: newThis.dogfallTime + 1 });
        this.setData({ alertTxt: "dogfall" });
      } else if (newThis.computer === 2) {
        this.setData({ winTime: newThis.winTime + 1 });
        this.setData({ alertTxt: "WIN!" });
      }
    } else if (newThis.human === 2) {
      if (newThis.computer === 1) {
        this.setData({ loseTime: newThis.loseTime + 1 });
        this.setData({ alertTxt: "LOSE.." });
      } else if (newThis.computer === 2) {
        this.setData({ dogfallTime: newThis.dogfallTime + 1 });
        this.setData({ alertTxt: "dogfall" });
      } else if (newThis.computer === 0) {
        this.setData({ winTime: newThis.winTime + 1 });
        this.setData({ alertTxt: "WIN!" });
      }
    };
    this.showYellowBtn()
  },
  showYellowBtn() {
    if(this.data.winTime > 0) {
      this.setData({ hiddenContent: false });
      if (this.data.winTime > 10 && this.data.winTime <= 24) {
        this.setData({ btnTxt: "你他妈还看不看" });
      } else if (this.data.winTime > 25 && this.data.winTime <= 34) {
        this.setData({ btnTxt: "再不看我关了" });
      } else if (this.data.winTime > 35 && this.data.winTime < 37) {
        this.setData({ btnTxt: "再见！" });
      } else if (this.data.winTime >= 37) {
        this.setData({ hiddenContent: true });
      }
    }
  },
  goypage(){
    wx.navigateTo({
      url: '../yello/yello'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})