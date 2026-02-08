import React from 'react'

function Template4() {
  return (
    <>
    <style>{`    :root {
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
  width: 349.375px;
  height: 800px;
  margin: 0 auto;
  background: #1f2630
}
.groups {
  position: absolute;
  height: 800px;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 2;
}
.groups-1 {
  position: relative;
  width: 349.375px;
  height: 27.5px;
  margin: 0 0 0 0;
  font-size: 0px;
  background: rgba(0, 0, 0, 0);
  z-index: 40;
  overflow: visible auto;
}
.span {
  display: block;
  position: relative;
  height: 9px;
  margin: 4.375px 0 0 226.25px;
  color: #989ba3;
  font-family: Inter, var(--default-font-family);
  font-size: 7.5px;
  font-weight: 400;
  line-height: 9px;
  text-align: left;
  white-space: nowrap;
  z-index: 46;
}
.flex-row-e {
  position: relative;
  width: 312.5px;
  height: 15px;
  margin: -8.375px 0 0 16.25px;
  z-index: 49;
}
.colon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15px;
  right: 283.125px;
  bottom: 0;
  color: #a8abb3;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  white-space: nowrap;
  z-index: 49;
}
.regroup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 30px;
  height: 15px;
  right: 247.5px;
  bottom: 0;
  z-index: 48;
}
.image {
  flex-shrink: 0;
  position: relative;
  width: 13.125px;
  height: 13.125px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/KgYDUWXRGS.png)
    no-repeat center;
  background-size: cover;
  z-index: 48;
}
.image-2 {
  flex-shrink: 0;
  position: relative;
  width: 11.25px;
  height: 2.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/O8jBViusSL.png)
    no-repeat center;
  background-size: cover;
  z-index: 47;
}
.image-3 {
  position: absolute;
  width: 12.5px;
  height: 13.75px;
  right: 70px;
  bottom: 0;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/wUYhEpjzno.png)
    no-repeat center;
  background-size: cover;
  z-index: 44;
}
.image-4 {
  position: absolute;
  width: 16.25px;
  height: 12.5px;
  right: 28.125px;
  bottom: 0.63px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/UTU0xbDJg7.png)
    no-repeat center;
  background-size: cover;
  z-index: 42;
}
.image-5 {
  position: absolute;
  width: 16.875px;
  height: 11.25px;
  right: 48.75px;
  bottom: 1.25px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/b935FGOkft.png)
    no-repeat center;
  background-size: cover;
  z-index: 43;
}
.image-6 {
  position: absolute;
  width: 23.125px;
  height: 10.625px;
  right: 0;
  bottom: 1.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/Csz6Hu90EL.png)
    no-repeat center;
  background-size: cover;
  z-index: 41;
}
.kb-s {
  display: block;
  position: relative;
  height: 6.875px;
  margin: -6.25px 0 0 226.25px;
  color: #aaaeb4;
  font-family: Inter, var(--default-font-family);
  font-size: 6.875px;
  font-weight: 400;
  line-height: 6.875px;
  text-align: left;
  white-space: nowrap;
  z-index: 45;
}
.groups-7 {
  position: relative;
  width: 349.375px;
  height: 38.125px;
  margin: 0.63px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 38;
  overflow: visible auto;
}
.image-8 {
  position: relative;
  width: 14.375px;
  height: 11.25px;
  margin: 13.75px 0 0 16.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/PkDU1qOMOQ.png)
    no-repeat center;
  background-size: cover;
  z-index: 39;
}
.groups-9 {
  position: relative;
  width: 349.375px;
  height: 269.375px;
  margin: 1.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 31;
  overflow: visible auto;
}
.image-a {
  position: relative;
  width: 203.125px;
  height: 96.875px;
  margin: 7.5px 0 0 72.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/m5aGjk88kR.png)
    no-repeat center;
  background-size: cover;
  z-index: 35;
  overflow: visible auto;
}
.image-b {
  position: relative;
  width: 140.625px;
  height: 88.125px;
  margin: 6.875px 0 0 60.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/F9Gfip4u3A.png)
    no-repeat center;
  background-size: cover;
  z-index: 36;
  overflow: visible auto;
}
.image-c {
  position: relative;
  width: 82.5px;
  height: 83.125px;
  margin: 4.375px 0 0 1.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/2qntO54J4p.png)
    no-repeat center;
  background-size: cover;
  z-index: 37;
}
.payment-successf {
  display: block;
  position: relative;
  height: 24.375px;
  margin: 25px 0 0 89.375px;
  color: #b0b4bb;
  font-family: Inter, var(--default-font-family);
  font-size: 16.875px;
  font-weight: 700;
  line-height: 20.423px;
  text-align: left;
  white-space: nowrap;
  z-index: 34;
}
.usdt {
  display: block;
  position: relative;
  height: 28.75px;
  margin: 18.125px 0 0 69.375px;
  color: #cfd2d8;
  font-family: Inter, var(--default-font-family);
  font-size: 25px;
  font-weight: 700;
  line-height: 28.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 33;
}
.the-recipient-ca {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 263.125px;
  height: 32.5px;
  margin: 16.875px 0 0 44.375px;
  color: #5e656f;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 400;
  line-height: 14.863px;
  text-align: center;
  text-overflow: initial;
  z-index: 32;
  overflow: hidden;
}
.groups-d {
  position: relative;
  width: 349.375px;
  height: 459.375px;
  margin: 3.125px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 4;
  overflow: visible auto;
}
.groups-e {
  position: relative;
  width: 349.375px;
  height: 125px;
  margin: -0.63px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 21;
  overflow: visible auto;
}
.flex-row-d {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 321.25px;
  height: 15.625px;
  margin: 19.375px 0 0 14.375px;
  z-index: 29;
}
.span-to {
  flex-shrink: 0;
  position: relative;
  height: 13.75px;
  color: #6c737d;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 700;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 29;
}
.span-nickname-muneeb {
  flex-shrink: 0;
  position: relative;
  height: 15.625px;
  color: #aaadb4;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 700;
  line-height: 15.625px;
  text-align: left;
  white-space: nowrap;
  z-index: 28;
}
.span-940266562 {
  display: block;
  position: relative;
  height: 13px;
  margin: 5px 0 0 275px;
  color: #666d77;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 400;
  line-height: 12.859px;
  text-align: left;
  white-space: nowrap;
  z-index: 27;
}
.span-add-alias {
  display: block;
  position: relative;
  height: 13.75px;
  margin: 10.125px 0 0 276.875px;
  color: #97813a;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 26;
}
.groups-f {
  position: relative;
  width: 349.375px;
  height: 35px;
  margin: 11.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 22;
}
.span-411263337551249408 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15.625px;
  right: 36.875px;
  bottom: 10px;
  color: #9a9da5;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 15.128px;
  text-align: left;
  white-space: nowrap;
  z-index: 24;
}
.image-10 {
  position: absolute;
  width: 16.25px;
  height: 16.25px;
  right: 16.25px;
  bottom: 8.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/e5zEBDqz0f.png)
    no-repeat center;
  background-size: cover;
  z-index: 23;
}
.span-order-id {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14.375px;
  right: 283.75px;
  bottom: 10px;
  color: #666d77;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 14.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 25;
}
.flex-row-fd {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 320.625px;
  height: 16.25px;
  margin: 9.375px 0 0 15px;
  z-index: 20;
}
.span-payment-method {
  flex-shrink: 0;
  position: relative;
  height: 16.25px;
  color: #757c86;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 16.25px;
  text-align: left;
  white-space: nowrap;
  z-index: 20;
}
.spot-account {
  flex-shrink: 0;
  position: relative;
  height: 15px;
  color: #9ea2aa;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  white-space: nowrap;
  z-index: 19;
}
.flex-row-e-11 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 320px;
  height: 15px;
  margin: 19.375px 0 0 15px;
  z-index: 18;
}
.paid-with {
  flex-shrink: 0;
  position: relative;
  height: 14.375px;
  color: #6b727c;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 14.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 18;
}
.usdt-12 {
  flex-shrink: 0;
  position: relative;
  height: 15px;
  color: #9ea1a9;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  white-space: nowrap;
  z-index: 17;
}
.groups-13 {
  position: relative;
  width: 323.75px;
  height: 95px;
  margin: 14.375px 0 0 12.5px;
  background: rgba(0, 0, 0, 0);
  z-index: 13;
  overflow: visible auto;
}
.background {
  position: relative;
  width: 320px;
  height: 88.75px;
  margin: 4.375px 0 0 1.875px;
  background: #1f252f;
  border: 0.63px solid #2e353f;
  z-index: 14;
  border-radius: 11.25px;
}
.enjoy-up-to {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  width: 188.125px;
  height: 43.75px;
  right: 115px;
  bottom: 25.625px;
  color: #b4b7bf;
  font-family: Inter, var(--default-font-family);
  font-size: 14.375px;
  font-weight: 700;
  line-height: 20.967px;
  text-align: left;
  text-overflow: initial;
  z-index: 16;
  overflow: hidden;
}
.image-14 {
  position: absolute;
  width: 47.5px;
  height: 38.75px;
  right: 18.125px;
  bottom: 22.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/YOhzfXQXKQ.png)
    no-repeat center;
  background-size: cover;
  z-index: 15;
}
.groups-15 {
  position: relative;
  width: 349.375px;
  height: 120.625px;
  margin: 45px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 5;
  overflow: visible auto;
}
.button {
  position: relative;
  width: 325px;
  height: 51.875px;
  margin: 1.875px 0 0 11.875px;
  background: rgba(0, 0, 0, 0);
  z-index: 10;
  overflow: visible auto;
}
.background-16 {
  position: relative;
  width: 320px;
  height: 46.875px;
  margin: 3.125px 0 0 2.5px;
  background: #fbd433;
  border: 0.63px solid #e0ca44;
  z-index: 11;
  border-radius: 6.25px;
}
.send-another-tra {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 18.125px;
  right: 68.75px;
  bottom: 15px;
  color: #816727;
  font-family: Inter, var(--default-font-family);
  font-size: 14.375px;
  font-weight: 400;
  line-height: 17.397px;
  text-align: left;
  white-space: nowrap;
  z-index: 12;
}
.groups-17 {
  position: relative;
  width: 211.875px;
  height: 43.125px;
  margin: 22.5px 0 0 61.25px;
  background: rgba(0, 0, 0, 0);
  z-index: 6;
}
.image-18 {
  position: absolute;
  width: 19.375px;
  height: 19.375px;
  right: 88.75px;
  bottom: 11.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/2wj3h7FgKP.png)
    no-repeat center;
  background-size: cover;
  z-index: 8;
}
.image-19 {
  position: absolute;
  width: 13.125px;
  height: 16.25px;
  right: 13.125px;
  bottom: 13.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/iQ2SiM8xDu.png)
    no-repeat center;
  background-size: cover;
  z-index: 7;
}
.image-1a {
  position: absolute;
  width: 14.375px;
  height: 14.375px;
  right: 171.25px;
  bottom: 14.375px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/zpctWvnWXH.png)
    no-repeat center;
  background-size: cover;
  z-index: 9;
}
.image-1b {
  position: absolute;
  height: 800px;
  top: 0;
  right: 0;
  left: 0;
    no-repeat center;
  background-size: cover;
  z-index: 3;
}

.background-1e {
  position: absolute;
  width: 349.375px;
  height: 1.875px;
  right: 0;
  bottom: 458.125px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/kPXw9uwTgi.png)
    no-repeat center;
  background-size: cover;
  z-index: 30;
}`}</style>
    
  <div className="main-container">
      <div className="groups">
        <div className="groups-1">
          <span className="span">3.25</span>
          <div className="flex-row-e">
            <span className="colon">6:03</span>
            <div className="regroup">
              <div className="image"></div>
              <div className="image-2"></div>
            </div>
            <div className="image-3"></div>
            <div className="image-4"></div>
            <div className="image-5"></div>
            <div className="image-6"></div>
          </div>
          <span className="kb-s">KB/s</span>
        </div>
        <div className="groups-7"><div className="image-8"></div></div>
        <div className="groups-9">
          <div className="image-a">
            <div className="image-b"><div className="image-c"></div></div>
          </div>
          <span className="payment-successf">Payment Successful</span
          ><span className="usdt">0.0080046USDT</span
          ><span className="the-recipient-ca"
            >The recipient can check the balance in the Funding<br />Account</span
          >
        </div>
        <div className="groups-d">
          <div className="groups-e">
            <div className="flex-row-d">
              <span className="span-to">To</span
              ><span className="span-nickname-muneeb">Nickname: Muneeb-h4u6m</span>
            </div>
            <span className="span-940266562">940266562</span
            ><span className="span-add-alias">Add Alias</span>
            <div className="groups-f">
              <span className="span-411263337551249408">411263337551249408</span>
              <div className="image-10"></div>
              <span className="span-order-id">Order ID</span>
            </div>
          </div>
          <div className="flex-row-fd">
            <span className="span-payment-method">Payment Method</span
            ><span className="spot-account">Spot Account</span>
          </div>
          <div className="flex-row-e-11">
            <span className="paid-with">Paid With</span
            ><span className="usdt-12">0.0080046USDT</span>
          </div>
          <div className="groups-13">
            <div className="background">
              <span className="enjoy-up-to"
                >Enjoy Up to 50% Off in Hot<br />Deals</span
              >
              <div className="image-14"></div>
            </div>
          </div>
          <div className="groups-15">
            <div className="button">
              <div className="background-16">
                <span className="send-another-tra">Send Another Transaction</span>
              </div>
            </div>
            <div className="groups-17">
              <div className="image-18"></div>
              <div className="image-19"></div>
              <div className="image-1a"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-1b"></div>
      <div className="image-1c"></div>
      <div className="image-1d"></div>
      <div className="background-1e"></div>
    </div>
    
    
    </>
  )
}

export default Template4