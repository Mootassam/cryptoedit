import React from 'react'

function Template10() {
  return (
    <div><style>{`   :root {
  --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
}

.main-container {
  overflow: hidden;
}

.main-container,
.main-container * {
  box-sizing: border-box;
}

input,
select,
textarea,
button {
  outline: 0;
}

.main-container {
  position: relative;
  width: 368.75px;
  height: 800px;
  margin: 0 auto;
  background: #020203;
}
.groups {
  position: relative;
  width: 368.75px;
  height: 203.75px;
  margin: 0 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 31;
  overflow: visible auto;
}
.groups-1 {
  position: relative;
  width: 368.75px;
  height: 48.75px;
  margin: 0 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 37;
}
.time {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15.625px;
  right: 291.875px;
  bottom: 16.25px;
  color: #c7c7c9;
  font-family: Inter, var(--default-font-family);
  font-size: 15.625px;
  font-weight: 800;
  line-height: 15.625px;
  text-align: left;
  white-space: nowrap;
  z-index: 42;
}
.image {
  position: absolute;
  width: 27.5px;
  height: 13.75px;
  right: 31.875px;
  bottom: 16.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/0oZDawKE1Z.png)
    no-repeat center;
  background-size: cover;
  z-index: 38;
}
.image-2 {
  position: absolute;
  width: 19.375px;
  height: 12.5px;
  right: 88.125px;
  bottom: 17.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/OgWKkfWbSZ.png)
    no-repeat center;
  background-size: cover;
  z-index: 40;
}
.image-3 {
  position: absolute;
  width: 17.5px;
  height: 12.5px;
  right: 65px;
  bottom: 17.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/d8GT2txwA9.png)
    no-repeat center;
  background-size: cover;
  z-index: 39;
}
.image-4 {
  position: absolute;
  width: 12.5px;
  height: 13.125px;
  right: 276.25px;
  bottom: 16.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/45UZ8qD9AS.png)
    no-repeat center;
  background-size: cover;
  z-index: 41;
}
.groups-5 {
  position: relative;
  width: 368.75px;
  height: 46.875px;
  margin: 1.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 34;
}
.withdrawal-details {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 16.25px;
  right: 110.625px;
  bottom: 15px;
  color: #dbdbdc;
  font-family: Inter, var(--default-font-family);
  font-size: 15px;
  font-weight: 900;
  line-height: 16.25px;
  text-align: left;
  white-space: nowrap;
  z-index: 35;
}
.image-6 {
  position: absolute;
  width: 14.375px;
  height: 13.75px;
  right: 337.5px;
  bottom: 14.375px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/BS2AHaC2jG.png)
    no-repeat center;
  background-size: cover;
  z-index: 36;
}
.quantity {
  display: block;
  position: relative;
  height: 14.375px;
  margin: 23.75px 0 0 161.875px;
  color: #7c7b81;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 600;
  line-height: 12.859px;
  text-align: left;
  white-space: nowrap;
  z-index: 45;
}
.usdt {
  display: block;
  position: relative;
  height: 16.25px;
  margin: 8.125px 0 0 147.5px;
  color: #cfcfd1;
  font-family: Inter, var(--default-font-family);
  font-size: 15px;
  font-weight: 700;
  line-height: 16.25px;
  text-align: left;
  white-space: nowrap;
  z-index: 44;
}
.withdrawal-completed {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15px;
  right: 116.25px;
  bottom: 20px;
  color: #2e7759;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 700;
  line-height: 12.859px;
  text-align: left;
  white-space: nowrap;
  z-index: 43;
}
.image-7 {
  position: absolute;
  width: 12.5px;
  height: 12.5px;
  right: 241.875px;
  bottom: 21.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/wMRpqXLseO.png)
    no-repeat center;
  background-size: cover;
  z-index: 33;
}
.groups-8 {
  position: relative;
  width: 368.75px;
  height: 586.875px;
  margin: 8.75px 0 0 0;
  background: rgba(0, 0, 0, 0);
}
.background {
  position: absolute;
  width: 368.75px;
  height: 586.875px;
  right: 0;
  bottom: 0;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/2bi21tQ02Q.png)
    no-repeat center;
  background-size: cover;
  z-index: 1;
}
.groups-9 {
  position: relative;
  width: 368.75px;
  height: 239.375px;
  margin: 0 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 7;
}
.groups-a {
  position: absolute;
  width: 368.75px;
  height: 239.375px;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 8;
}
.groups-b {
  position: relative;
  width: 368.75px;
  height: 62.5px;
  margin: 1.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 24;
  overflow: visible auto;
}
.flex-row-a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 341.875px;
  height: 13px;
  margin: 14.375px 0 0 13.75px;
  z-index: 30;
}
.withdrawal-accou {
  flex-shrink: 0;
  position: relative;
  height: 12.5px;
  color: #78797e;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 600;
  line-height: 12.5px;
  text-align: left;
  white-space: nowrap;
  z-index: 30;
}
.funding-account {
  flex-shrink: 0;
  position: relative;
  height: 13px;
  color: #a4a4a6;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 700;
  line-height: 13px;
  text-align: left;
  white-space: nowrap;
  z-index: 29;
}
.groups-c {
  width: 368.75px;
  height: 40px;
  margin: -4.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 1;
  overflow: visible auto;
}
.groups-d {

  margin: 11.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 26;
}
.fees {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 12px;
  right: 330px;
  bottom: 8px;
  color: #838388;
  font-family: Inter, var(--default-font-family);
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  text-align: left;
  white-space: nowrap;
  z-index: 28;
}
.dot {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 11.25px;
  right: 13.75px;
  bottom: 8.75px;
  color: #a9a9ab;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 11.25px;
  text-align: left;
  white-space: nowrap;
  z-index: 27;
}
.groups-e {
  position: relative;
  width: 368.75px;
  height: 26.25px;
  margin: 1.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 21;
}
.chain-type {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 296.25px;
  bottom: 5.625px;
  color: #7e7e83;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 700;
  line-height: 12.859px;
  text-align: left;
  white-space: nowrap;
  z-index: 23;
}
.trc {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 12px;
  right: 13.75px;
  bottom: 7.375px;
  color: #b7b7b9;
  font-family: Inter, var(--default-font-family);
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  text-align: left;
  white-space: nowrap;
  z-index: 22;
}
.groups-f {
  position: relative;
  width: 368.75px;
  height: 28.125px;
  margin: 1.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 18;
}
.time-10 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 12.5px;
  right: 13.125px;
  bottom: 8.125px;
  color: #a7a7a9;
  font-family: Inter, var(--default-font-family);
  font-size: 10px;
  font-weight: 700;
  line-height: 12.102px;
  text-align: left;
  white-space: nowrap;
  z-index: 19;
}
.time-11 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 11.25px;
  right: 328.125px;
  bottom: 8.75px;
  color: #7f7e84;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 11.25px;
  text-align: left;
  white-space: nowrap;
  z-index: 20;
}
.groups-12 {
  position: relative;
  width: 368.75px;
  height: 38.75px;
  margin: 0.63px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 13;
}
.tuuuxxtmdxkfrjb {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  width: 122.5px;
  height: 31.875px;
  right: 27.5px;
  bottom: 1.875px;
  color: #bababc;
  font-family: Inter, var(--default-font-family);
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  text-align: right;
  text-overflow: initial;
  z-index: 16;
  overflow: hidden;
}
.withdrawal-address {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13px;
  right: 247.5px;
  bottom: 18.875px;
  color: #7d7c82;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 600;
  line-height: 12.859px;
  text-align: left;
  white-space: nowrap;
  z-index: 17;
}
.image-13 {
  position: absolute;
  width: 10.625px;
  height: 10.625px;
  right: 14.375px;
  bottom: 21.25px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/gdXQuodQVJ.png)
    no-repeat center;
  background-size: cover;
  z-index: 15;
}
.image-14 {
  position: absolute;
  width: 0.63px;
  height: 6.25px;
  right: 24.375px;
  bottom: 7.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/FCwaEDBdmH.png)
    no-repeat center;
  background-size: cover;
  z-index: 14;
}
.groups-15 {
  position: relative;
  width: 368.75px;
  height: 72.5px;
  margin: 1.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 9;
}
.da {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  width: 130px;
  height: 60px;
  right: 26.25px;
  bottom: 5px;
  color: #b6b6b8;
  font-family: Merriweather, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 700;
  line-height: 14.779px;
  text-align: right;
  text-overflow: initial;
  z-index: 11;
  overflow: hidden;
}
.transaction-hash {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13px;
  right: 263.125px;
  bottom: 50.125px;
  color: #78797e;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 700;
  line-height: 12.859px;
  text-align: left;
  white-space: nowrap;
  z-index: 12;
}
.image-16 {
  position: absolute;
  width: 10.625px;
  height: 10.625px;
  right: 14.375px;
  bottom: 51.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/0LPVFSAsUv.png)
    no-repeat center;
  background-size: cover;
  z-index: 10;
}
.groups-17 {
  position: relative;
  width: 345.625px;
  height: 49.375px;
  margin: 259.375px 0 0 10.625px;
  background: rgba(0, 0, 0, 0);
  z-index: 3;
  overflow: visible auto;
}
.button {
  position: relative;
  width: 341.875px;
  height: 45.625px;
  margin: 1.875px 0 0 1.875px;
  background: rgba(0, 0, 0, 0);
  z-index: 4;
  overflow: visible auto;
}
.background-18 {
  position: relative;
  width: 337.5px;
  height: 41.25px;
  margin: 2.5px 0 0 3.125px;
  background: #15161b;
  border: 0.63px solid #333338;
  z-index: 5;
  border-radius: 3.75px;
}
.view-in-blockchain {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 16.875px;
  right: 84.375px;
  bottom: 11.875px;
  color: #c7c7c9;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 600;
  line-height: 15.128px;
  text-align: left;
  white-space: nowrap;
  z-index: 6;
}
.background-19 {
  position: relative;
  width: 131.25px;
  height: 4.375px;
  margin: 28.125px 0 0 118.75px;
  background: #100f15
    no-repeat center;
  background-size: cover;
  z-index: 2;
}
.background-1a {
  position: absolute;
  width: 368.75px;
  height: 203.75px;
  right: 0;
  bottom: 596.25px;
  background: #100f15
    no-repeat center;
  background-size: cover;
  z-index: 1;
}`}</style>

 <div className="main-container">
      <div className="groups">
        <div className="groups-1">
          <span className="time">9:11</span>
          <div className="image"></div>
          <div className="image-2"></div>
          <div className="image-3"></div>
          <div className="image-4"></div>
        </div>
        <div className="groups-5">
          <span className="withdrawal-details">Withdrawal Details</span>
          <div className="image-6"></div>
        </div>
        <span className="quantity">Quantity</span><span className="usdt">100 USDT</span><span className="withdrawal-completed">Withdrawal Completed</span>
        <div className="image-7"></div>
      </div>
      <div className="groups-8">
        <div className="background">
          <div className="groups-9">
            <div className="groups-a">
              <div className="groups-b">
                <div className="flex-row-a">
                  <span className="withdrawal-accou">Withdrawal Account</span><span className="funding-account">Funding Account</span>
                </div>
                <div className="groups-c">
                  <div className="groups-d">
                    <span className="fees">Fees</span><span className="dot">1.3</span>
                  </div>
                </div>
              </div>
              <div className="groups-e">
                <span className="chain-type">Chain Type</span                ><span className="trc">TRC20</span>
              </div>
              <div className="groups-f">
                <span className="time-10">2024-04-0220:59:54</span                ><span className="time-11">Time</span>
              </div>
              <div className="groups-12">
                <span className="tuuuxxtmdxkfrjb"
                  >TU7uuxXtMdXkFrjbFXo<br />Cm8E2v2oxKjehxQ</span                ><span className="withdrawal-address">Withdrawal Address</span>
                <div className="image-13"></div>
                <div className="image-14"></div>
              </div>
              <div className="groups-15">
                <span className="da"
                  >32da073058657255e31<br />7e137c2c062a2af8ae55<br />129b4a586170f8cfed9d<br />f620b</span                ><span className="transaction-hash">Transaction Hash</span>
                <div className="image-16"></div>
              </div>
            </div>
          </div>
          <div className="groups-17">
            <div className="button">
              <div className="background-18">
                <span className="view-in-blockchain"
                  >View in Blockchain Explorer</span                >
              </div>
            </div>
          </div>
          <div className="background-19"></div>
        </div>
      </div>
      <div className="background-1a"></div>
    </div>


</div>
  )
}

export default Template10