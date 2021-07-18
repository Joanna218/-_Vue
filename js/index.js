let data = {
  address: [
    // 基隆市
    { city: '基隆市', district: '仁愛區', zip: '200' },
    { city: '基隆市', district: '信義區', zip: '201' },
    { city: '基隆市', district: '中正區', zip: '202' },
    { city: '基隆市', district: '中山區', zip: '203' },
    { city: '基隆市', district: '安樂區', zip: '204' },
    { city: '基隆市', district: '暖暖區', zip: '205' },
    { city: '基隆市', district: '七堵區', zip: '206' },
    // 台北市
    { city: '臺北市', district: '中正區', zip: '100' },
    { city: '臺北市', district: '大同區', zip: '103' },
    { city: '臺北市', district: '中山區', zip: '104' },
    { city: '臺北市', district: '松山區', zip: '105' },
    { city: '臺北市', district: '大安區', zip: '106' },
    { city: '臺北市', district: '萬華區', zip: '108' },
    { city: '臺北市', district: '信義區', zip: '110' },
    { city: '臺北市', district: '士林區', zip: '111' },
    { city: '臺北市', district: '北投區', zip: '112' },
    { city: '臺北市', district: '內湖區', zip: '114' },
    { city: '臺北市', district: '南港區', zip: '115' },
    { city: '臺北市', district: '文山區', zip: '116' },
    //新北市
    { city: '新北市', district: '萬里區', zip: '207' },
    { city: '新北市', district: '金山區', zip: '208' },
    { city: '新北市', district: '板橋區', zip: '220' },
    { city: '新北市', district: '汐止區', zip: '221' },
    { city: '新北市', district: '深坑區', zip: '222' },
    { city: '新北市', district: '石碇區', zip: '223' },
    { city: '新北市', district: '瑞芳區', zip: '224' },
    { city: '新北市', district: '平溪區', zip: '226' },
    { city: '新北市', district: '雙溪區', zip: '227' },
    { city: '新北市', district: '貢寮區', zip: '228' },
    { city: '新北市', district: '新店區', zip: '231' },
    { city: '新北市', district: '坪林區', zip: '231' },
    { city: '新北市', district: '烏來區', zip: '233' },
    { city: '新北市', district: '永和區', zip: '234' },
    { city: '新北市', district: '中和區', zip: '235' },
    { city: '新北市', district: '土城區', zip: '236' },
    { city: '新北市', district: '三峽區', zip: '237' },
    { city: '新北市', district: '樹林區', zip: '238' },
    { city: '新北市', district: '鶯歌區', zip: '239' },
    { city: '新北市', district: '三重區', zip: '241' },
    { city: '新北市', district: '新莊區', zip: '242' },
    { city: '新北市', district: '泰山區', zip: '243' },
    { city: '新北市', district: '林口區', zip: '244' },
    { city: '新北市', district: '蘆洲區', zip: '247' },
    { city: '新北市', district: '五股區', zip: '248' },
    { city: '新北市', district: '八里區', zip: '249' },
    { city: '新北市', district: '淡水區', zip: '251' },
    { city: '新北市', district: '三芝區', zip: '252' },
    { city: '新北市', district: '石門區', zip: '253' },
  ],
  input: {
    city: null,
    district: null,
  }
}

let vm = new Vue({
  el: '#app',
  data: data,
  computed: {
    cityList() {
      let obj = {
        sort: [],
        map: {},
      }

      this.address.forEach(({ city, district, zip }, index) => {
        if (!obj.map[city]) {
          obj.sort.push(city);
          obj.map[city] = {
            map: {},
            sort: []
          }
        }

        obj.map[city].sort.push(district);
        obj.map[city].map[district] = { index, zip };
      });

      return obj;
    },
    districtList() {
      this.input.district = null;
      if (this.input.city) {
        return this.cityList.map[this.input.city];
      } else {
        return [];
      }
    },
    zip() {
      if (this.input.district) {
        return this.districtList.map[this.input.district];
      } else {
        return null;
      }
    }
  }
})