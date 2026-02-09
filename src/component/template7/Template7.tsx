import React from 'react'
import { FormData } from '../../shared/FormDataContext';

interface Template7Props {
  formData: FormData;
}

const Template7: React.FC<Template7Props> = ({ formData }) => {
  return (
    <>
    
    <style>{`  :root {
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
  width: 369.375px;
  height: 800px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
}
.root {
  position: absolute;
  height: 800px;
  top: 0;
  right: 0;
  left: 0;
  background: #f0f1f3;
}
.groups {
  position: relative;
  width: 369.375px;
  height: 27.5px;
  margin: 0 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 87;
}
.time {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 303.125px;
  bottom: 4.375px;
  color: #68696b;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 700;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 95;
}
.image {
  position: absolute;
  width: 13.125px;
  height: 12.5px;
  right: 84.375px;
  bottom: 4.375px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/LO9Pe7hqAk.png)
    no-repeat center;
  background-size: cover;
  z-index: 91;
}
.image-1 {
  position: absolute;
  width: 23.75px;
  height: 11.25px;
  right: 18.75px;
  bottom: 5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/N6fozJ4aLx.png)
    no-repeat center;
  background-size: cover;
  z-index: 88;
}
.image-2 {
  position: absolute;
  width: 14.375px;
  height: 10.625px;
  right: 46.875px;
  bottom: 5.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/V0hQXk9Omq.png)
    no-repeat center;
  background-size: cover;
  z-index: 89;
}
.image-3 {
  position: absolute;
  width: 15px;
  height: 10px;
  right: 65px;
  bottom: 5.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/LXpGKheeO2.png)
    no-repeat center;
  background-size: cover;
  z-index: 90;
}
.image-4 {
  position: absolute;
  width: 14.375px;
  height: 10px;
  right: 101.875px;
  bottom: 5.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/SFHugjXhn5.png)
    no-repeat center;
  background-size: cover;
  z-index: 92;
}
.image-5 {
  position: absolute;
  width: 11.875px;
  height: 10.625px;
  right: 289.375px;
  bottom: 5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/ahL9CFyLGd.png)
    no-repeat center;
  background-size: cover;
  z-index: 94;
}
.image-6 {
  position: absolute;
  width: 8.125px;
  height: 5px;
  right: 273.75px;
  bottom: 8.125px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/xzxXw6EUgA.png)
    no-repeat center;
  background-size: cover;
  z-index: 93;
}
.groups-7 {
  position: relative;
  width: 369.375px;
  height: 85px;
  margin: 0.63px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 81;
  overflow: visible auto;
}
.flex-row {
  position: relative;
  width: 333.125px;
  height: 40px;
  margin: 2.5px 0 0 20px;
  z-index: 86;
}
.image-8 {
  position: absolute;
  width: 40px;
  height: 40px;
  right: 149.375px;
  bottom: 0;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/nG4RQZbRRW.png)
    no-repeat center;
  background-size: cover;
  z-index: 85;
}
.image-9 {
  position: absolute;
  width: 18.125px;
  height: 17.5px;
  right: 0;
  bottom: 11.25px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/6S7tU197iZ.png)
    no-repeat center;
  background-size: cover;
  z-index: 84;
}
.image-a {
  position: absolute;
  width: 7.5px;
  height: 14.375px;
  right: 325.625px;
  bottom: 12.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/xa0NHFpCt9.png)
    no-repeat center;
  background-size: cover;
  z-index: 86;
}
.usdt {
  display: block;
  position: relative;
  height: 14.375px;
  margin: 6.25px 0 0 167.5px;
  color: #52576b;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 14.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 83;
}
.tether-usd {
  display: block;
  position: relative;
  height: 13px;
  margin: 4.375px 0 0 154.375px;
  color: #9ea1aa;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 400;
  line-height: 12.859px;
  text-align: left;
  white-space: nowrap;
  z-index: 82;
}
.groups-b {
  position: relative;
  width: 349.375px;
  height: 562.5px;
  margin: 4.375px 0 0 11.25px;
  background: rgba(0, 0, 0, 0);
  z-index: 19;
  overflow: visible auto;
}
.groups-c {
  position: relative;
  width: 340px;
  height: 101.875px;
  margin: 0 0 0 3.125px;
  background: rgba(0, 0, 0, 0);
  z-index: 76;
  overflow: visible auto;
}
.background {
  position: relative;
  width: 336.25px;
  height: 100px;
  margin: 1.25px 0 0 1.875px;
  font-size: 0px;
  background: #fefefe;
  z-index: 77;
  overflow: visible auto;
  border-radius: 15.625px;
}
.my-balance {
  display: block;
  position: relative;
  height: 15px;
  margin: 16.875px 0 0 15.625px;
  color: #9d9fa4;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 80;
}
.usdt-d {
  display: block;
  position: relative;
  height: 19.375px;
  margin: 8.75px 0 0 15.625px;
  color: #34384a;
  font-family: Inter, var(--default-font-family);
  font-size: 20px;
  font-weight: 400;
  line-height: 19.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 79;
}
.dollar {
  display: block;
  position: relative;
  height: 13.75px;
  margin: 8.75px 0 0 15px;
  color: #9c9ea3;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 78;
}
.groups-e {
  position: relative;
  width: 349.375px;
  height: 453.75px;
  margin: 6.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 20;
}
.groups-f {
  position: absolute;
  width: 343.125px;
  height: 46.875px;
  right: 5.625px;
  bottom: 404.375px;
  background: rgba(0, 0, 0, 0);
  z-index: 73;
}
.see-all {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 16.875px;
  bottom: 14.375px;
  color: #679dc4;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 74;
}
.activity {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14.375px;
  right: 283.75px;
  bottom: 12.5px;
  color: #9fa1a6;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 75;
}
.background-10 {
  position: absolute;
  width: 343.125px;
  height: 449.375px;
  right: 3.125px;
  bottom: 1.25px;
  background: #ffffff;
  border: 1.875px solid #f0f1f3;
  z-index: 21;
}
.background-11 {
  position: relative;
  width: 263.75px;
  height: 1.875px;
  margin: 105px 0 0 58.75px;
  background: #fdfdfd;
  z-index: 65;
}
.groups-12 {
  position: relative;
  width: 340px;
  height: 62.5px;
  margin: 1.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 58;
}
.send {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 247.5px;
  bottom: 33.75px;
  color: #565a63;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 63;
}
.negative-fifty {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 16.25px;
  bottom: 33.5px;
  color: #4f515b;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 62;
}
.image-13 {
  position: absolute;
  width: 31.25px;
  height: 31.25px;
  right: 291.25px;
  bottom: 15px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/txF15GswM5.png)
    no-repeat center;
  background-size: cover;
  z-index: 64;
}
.text-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15.625px;
  right: 121.25px;
  bottom: 10px;
  color: #9c9ea3;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 60;
}
.time-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 15.625px;
  bottom: 12.5px;
  color: #9ea0a4;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 59;
}
.to {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 12.5px;
  right: 265.625px;
  bottom: 12.5px;
  color: #6c6f77;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 12.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 61;
}
.background-14 {
  position: relative;
  width: 265.625px;
  height: 1.875px;
  margin: 1.875px 0 0 58.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/xaMCcbLzpw.png)
    no-repeat center;
  background-size: cover;
  z-index: 57;
}
.groups-15 {
  position: relative;
  width: 340px;
  height: 62.5px;
  margin: 1.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 50;
}
.send-16 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 247.5px;
  bottom: 34.375px;
  color: #5a5d69;
  font-family: Inter, var(--default-font-family);
  font-size: 13.125px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 55;
}
.negative-sixty {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 16.25px;
  bottom: 33.5px;
  color: #52565f;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 54;
}
.image-17 {
  position: absolute;
  width: 31.25px;
  height: 31.25px;
  right: 291.25px;
  bottom: 15px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/aQrT0GmY4i.png)
    no-repeat center;
  background-size: cover;
  z-index: 56;
}
.tm-ond-con-hw {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15px;
  right: 123.75px;
  bottom: 10.625px;
  color: #9b9da3;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 52;
}
.seven-twenty-six-twenty-three-fifty-six {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 15.625px;
  bottom: 11.625px;
  color: #a0a2a6;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 51;
}
.to-18 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 12.5px;
  right: 265.625px;
  bottom: 12.5px;
  color: #70727a;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 12.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 53;
}
.background-19 {
  position: relative;
  width: 266.25px;
  height: 1.875px;
  margin: 1.875px 0 0 58.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/u2fTKHcHY9.png)
    no-repeat center;
  background-size: cover;
  z-index: 49;
}
.groups-1a {
  position: relative;
  width: 340px;
  height: 62.5px;
  margin: 1.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 42;
}
.send-1b {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14.375px;
  right: 247.5px;
  bottom: 33.75px;
  color: #5e626e;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 14.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 47;
}
.negative-thirty-two {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 16.25px;
  bottom: 33.5px;
  color: #63666e;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 46;
}
.image-1c {
  position: absolute;
  width: 31.25px;
  height: 31.25px;
  right: 291.25px;
  bottom: 15px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/QLs0ch9rHs.png)
    no-repeat center;
  background-size: cover;
  z-index: 48;
}
.tdvrtch-jvkef {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15.625px;
  right: 128.75px;
  bottom: 10.625px;
  color: #a1a3a8;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 44;
}
.seven-twenty-eighteen-twenty-one {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 17.5px;
  bottom: 12.5px;
  color: #a6a8ac;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 43;
}
.to-1d {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 12.5px;
  right: 265.625px;
  bottom: 12.5px;
  color: #74767d;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 12.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 45;
}
.background-1e {
  position: relative;
  width: 265px;
  height: 1.875px;
  margin: 1.875px 0 0 58.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/rye1BKFO7g.png)
    no-repeat center;
  background-size: cover;
  z-index: 41;
}
.groups-1f {
  position: relative;
  width: 340px;
  height: 63.125px;
  margin: 1.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 34;
}
.send-20 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 247.5px;
  bottom: 35px;
  color: #5f636e;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 39;
}
.negative-one-fifty {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14.375px;
  right: 16.25px;
  bottom: 34.375px;
  color: #5e626a;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 14.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 38;
}
.image-21 {
  position: absolute;
  width: 30.625px;
  height: 31.25px;
  right: 291.875px;
  bottom: 15.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/889hOOyBcK.png)
    no-repeat center;
  background-size: cover;
  z-index: 40;
}
.seven-nineteen-twenty-two-eleven {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 17.5px;
  bottom: 13.125px;
  color: #abacb0;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 35;
}
.tm-ond-con-hw-22 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15px;
  right: 123.75px;
  bottom: 11.25px;
  color: #a0a2a7;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 36;
}
.to-23 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 13.125px;
  right: 265.625px;
  bottom: 13.125px;
  color: #7b7f86;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: center;
  white-space: nowrap;
  z-index: 37;
}
.background-24 {
  position: relative;
  width: 263.75px;
  height: 1.875px;
  margin: 1.875px 0 0 59.375px;
  background: #fcfcfc;
  z-index: 33;
}
.groups-25 {
  position: relative;
  width: 340px;
  height: 64.375px;
  margin: 1.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 26;
}
.send-26 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 247.5px;
  bottom: 36.25px;
  color: #5b5f6c;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 31;
}
.minus-60 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14.375px;
  right: 16.25px;
  bottom: 35.625px;
  color: #5f626f;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 30;
}
.image-27 {
  position: absolute;
  width: 30.625px;
  height: 31.25px;
  right: 291.875px;
  bottom: 17.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/XoVuD1RwqA.png)
    no-repeat center;
  background-size: cover;
  z-index: 32;
}
.tmo-nd-con-hw {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15.625px;
  right: 123.75px;
  bottom: 12.5px;
  color: #9d9ea3;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 28;
}
.text-20 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 15.625px;
  bottom: 14.375px;
  color: #a7a8ac;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 27;
}
.to-28 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 13.125px;
  right: 265.625px;
  bottom: 14.375px;
  color: #72737a;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: center;
  white-space: nowrap;
  z-index: 29;
}
.groups-29 {
  position: relative;
  width: 338.125px;
  height: 20px;
  margin: 2.5px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 22;
}
.text-22 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 7.5px;
  right: 12.5px;
  bottom: -0.63px;
  color: #98c2a9;
  font-family: Inter, var(--default-font-family);
  font-size: 6.875px;
  font-weight: 400;
  line-height: 7.5px;
  text-align: left;
  white-space: nowrap;
  z-index: 23;
}
.image-2a {
  position: absolute;
  width: 49.375px;
  height: 6.875px;
  right: 227.5px;
  bottom: -0.63px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/jsSD57E0LV.png)
    no-repeat center;
  background-size: cover;
  z-index: 24;
}
.image-2b {
  position: absolute;
  width: 23.75px;
  height: 5.625px;
  right: 293.125px;
  bottom: -0.63px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/wcVMtNcodJ.png)
    no-repeat center;
  background-size: cover;
  z-index: 25;
}
.groups-2c {
  position: absolute;
  width: 343.125px;
  height: 62.5px;
  right: 5.625px;
  bottom: 345.625px;
  background: rgba(0, 0, 0, 0);
  z-index: 66;
}
.minus-208 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 16.875px;
  bottom: 34.75px;
  color: #5a5d68;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  white-space: nowrap;
  z-index: 70;
}
.send-2d {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 248.125px;
  bottom: 34.375px;
  color: #575b66;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 71;
}
.image-2e {
  position: absolute;
  width: 31.25px;
  height: 31.25px;
  right: 291.875px;
  bottom: 15.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/4Shs2gN4x2.png)
    no-repeat center;
  background-size: cover;
  z-index: 72;
}
.tmo-nd-con-hw-2f {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15px;
  right: 124.375px;
  bottom: 11.25px;
  color: #9a9ca1;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 68;
}
.text-26 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 16.25px;
  bottom: 13.125px;
  color: #a4a6ab;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 67;
}
.to-30 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 12.5px;
  right: 266.25px;
  bottom: 13.125px;
  color: #707379;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 12.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 69;
}
.groups-31 {
  position: relative;
  width: 369.375px;
  height: 76.875px;
  margin: -1.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 6;
}
.background-32 {
  position: absolute;
  width: 369.375px;
  height: 76.875px;
  right: 0;
  bottom: 0;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/NJZmqb2mYA.png)
    no-repeat center;
  background-size: cover;
  z-index: 8;
}
.groups-33 {
  position: relative;
  width: 369.375px;
  height: 70px;
  margin: 0 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 7;
}
.button {
  position: absolute;
  width: 136.875px;
  height: 56.25px;
  right: 155px;
  bottom: 6.875px;
  background: rgba(0, 0, 0, 0);
  z-index: 13;
}
.background-34 {
  position: relative;
  width: 131.875px;
  height: 53.125px;
  margin: 1.25px 0 0 3.125px;
  background: #fefefe;
  border: 0.63px solid #e2e3e4;
  z-index: 14;
  border-radius: 13.125px;
}
.receive {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 16.25px;
  right: 23.125px;
  bottom: 18.125px;
  color: #4a4d5e;
  font-family: Inter, var(--default-font-family);
  font-size: 14.375px;
  font-weight: 400;
  line-height: 16.25px;
  text-align: left;
  white-space: nowrap;
  z-index: 16;
}
.image-35 {
  position: absolute;
  width: 16.25px;
  height: 15.625px;
  right: 88.75px;
  bottom: 18.125px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/ZBAu7UdT7b.png)
    no-repeat center;
  background-size: cover;
  z-index: 15;
}
.button-36 {
  position: absolute;
  width: 134.375px;
  height: 55.625px;
  right: 13.75px;
  bottom: 6.875px;
  background: rgba(0, 0, 0, 0);
  z-index: 9;
}
.background-37 {
  position: relative;
  width: 130px;
  height: 53.125px;
  margin: 0.63px 0 0 2.5px;
  background: #007ffd;
  border: 0.63px solid #1d81dc;
  z-index: 10;
  border-radius: 11.25px;
}
.send-38 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 18.75px;
  right: 31.875px;
  bottom: 16.875px;
  color: #a9e0f4;
  font-family: Inter, var(--default-font-family);
  font-size: 15px;
  font-weight: 400;
  line-height: 18.153px;
  text-align: left;
  white-space: nowrap;
  z-index: 12;
}
.image-39 {
  position: absolute;
  width: 16.875px;
  height: 18.125px;
  right: 77.5px;
  bottom: 16.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/zZd7QMwiHw.png)
    no-repeat center;
  background-size: cover;
  z-index: 11;
}
.image-3a {
  position: absolute;
  width: 53.125px;
  height: 53.125px;
  right: 300.625px;
  bottom: 8.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/nXAHhQmNv1.png)
    no-repeat center;
  background-size: cover;
  z-index: 17;
}
.background-3b {
  position: relative;
  width: 8.125px;
  height: 8.125px;
  margin: 8.125px 0 0 38.125px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/LjCeL2gC7F.png)
    no-repeat center;
  background-size: cover;
  z-index: 18;
}
.groups-3c {
  position: relative;
  width: 369.375px;
  height: 44.375px;
  margin: 0 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 2;
}
.image-3d {
  position: absolute;
  width: 10.625px;
  height: 10.625px;
  right: 264.375px;
  bottom: 16.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/3d5kYq4X4m.png)
    no-repeat center;
  background-size: cover;
  z-index: 5;
}
.image-3e {
  position: absolute;
  width: 10.625px;
  height: 10px;
  right: 178.75px;
  bottom: 17.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/x5v8Bqmiu7.png)
    no-repeat center;
  background-size: cover;
  z-index: 4;
}
.image-3f {
  position: absolute;
  width: 7.5px;
  height: 10.625px;
  right: 96.25px;
  bottom: 16.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/VXZPnVtoXm.png)
    no-repeat center;
  background-size: cover;
  z-index: 3;
}
.background-40 {
  position: absolute;
  width: 369.375px;
  height: 45px;
  right: 0;
  bottom: 0;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/2636xD5uwH.png)
    no-repeat center;
  background-size: cover;
  z-index: 1;
}
:root {
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
  width: 369.375px;
  height: 800px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
}
.root {
  position: absolute;
  height: 800px;
  top: 0;
  right: 0;
  left: 0;
  background: #f0f1f3;
}
.groups {
  position: relative;
  width: 369.375px;
  height: 27.5px;
  margin: 0 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 87;
}
.time {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 303.125px;
  bottom: 4.375px;
  color: #68696b;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 700;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 95;
}
.image {
  position: absolute;
  width: 13.125px;
  height: 12.5px;
  right: 84.375px;
  bottom: 4.375px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/LO9Pe7hqAk.png)
    no-repeat center;
  background-size: cover;
  z-index: 91;
}
.image-1 {
  position: absolute;
  width: 23.75px;
  height: 11.25px;
  right: 18.75px;
  bottom: 5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/N6fozJ4aLx.png)
    no-repeat center;
  background-size: cover;
  z-index: 88;
}
.image-2 {
  position: absolute;
  width: 14.375px;
  height: 10.625px;
  right: 46.875px;
  bottom: 5.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/V0hQXk9Omq.png)
    no-repeat center;
  background-size: cover;
  z-index: 89;
}
.image-3 {
  position: absolute;
  width: 15px;
  height: 10px;
  right: 65px;
  bottom: 5.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/LXpGKheeO2.png)
    no-repeat center;
  background-size: cover;
  z-index: 90;
}
.image-4 {
  position: absolute;
  width: 14.375px;
  height: 10px;
  right: 101.875px;
  bottom: 5.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/SFHugjXhn5.png)
    no-repeat center;
  background-size: cover;
  z-index: 92;
}
.image-5 {
  position: absolute;
  width: 11.875px;
  height: 10.625px;
  right: 289.375px;
  bottom: 5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/ahL9CFyLGd.png)
    no-repeat center;
  background-size: cover;
  z-index: 94;
}
.image-6 {
  position: absolute;
  width: 8.125px;
  height: 5px;
  right: 273.75px;
  bottom: 8.125px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/xzxXw6EUgA.png)
    no-repeat center;
  background-size: cover;
  z-index: 93;
}
.groups-7 {
  position: relative;
  width: 369.375px;
  height: 85px;
  margin: 0.63px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 81;
  overflow: visible auto;
}
.flex-row {
  position: relative;
  width: 333.125px;
  height: 40px;
  margin: 2.5px 0 0 20px;
  z-index: 86;
}
.image-8 {
  position: absolute;
  width: 40px;
  height: 40px;
  right: 149.375px;
  bottom: 0;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/nG4RQZbRRW.png)
    no-repeat center;
  background-size: cover;
  z-index: 85;
}
.image-9 {
  position: absolute;
  width: 18.125px;
  height: 17.5px;
  right: 0;
  bottom: 11.25px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/6S7tU197iZ.png)
    no-repeat center;
  background-size: cover;
  z-index: 84;
}
.image-a {
  position: absolute;
  width: 7.5px;
  height: 14.375px;
  right: 325.625px;
  bottom: 12.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/xa0NHFpCt9.png)
    no-repeat center;
  background-size: cover;
  z-index: 86;
}
.usdt {
  display: block;
  position: relative;
  height: 14.375px;
  margin: 6.25px 0 0 167.5px;
  color: #52576b;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 14.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 83;
}
.tether-usd {
  display: block;
  position: relative;
  height: 13px;
  margin: 4.375px 0 0 154.375px;
  color: #9ea1aa;
  font-family: Inter, var(--default-font-family);
  font-size: 10.625px;
  font-weight: 400;
  line-height: 12.859px;
  text-align: left;
  white-space: nowrap;
  z-index: 82;
}
.groups-b {
  position: relative;
  width: 349.375px;
  height: 562.5px;
  margin: 4.375px 0 0 11.25px;
  background: rgba(0, 0, 0, 0);
  z-index: 19;
  overflow: visible auto;
}
.groups-c {
  position: relative;
  width: 340px;
  height: 101.875px;
  margin: 0 0 0 3.125px;
  background: rgba(0, 0, 0, 0);
  z-index: 76;
  overflow: visible auto;
}
.background {
  position: relative;
  width: 336.25px;
  height: 100px;
  margin: 1.25px 0 0 1.875px;
  font-size: 0px;
  background: #fefefe;
  z-index: 77;
  overflow: visible auto;
  border-radius: 15.625px;
}
.my-balance {
  display: block;
  position: relative;
  height: 15px;
  margin: 16.875px 0 0 15.625px;
  color: #9d9fa4;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 80;
}
.usdt-d {
  display: block;
  position: relative;
  height: 19.375px;
  margin: 8.75px 0 0 15.625px;
  color: #34384a;
  font-family: Inter, var(--default-font-family);
  font-size: 20px;
  font-weight: 400;
  line-height: 19.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 79;
}
.dollar {
  display: block;
  position: relative;
  height: 13.75px;
  margin: 8.75px 0 0 15px;
  color: #9c9ea3;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 78;
}
.groups-e {
  position: relative;
  width: 349.375px;
  height: 453.75px;
  margin: 6.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 20;
}
.groups-f {
  position: absolute;
  width: 343.125px;
  height: 46.875px;
  right: 5.625px;
  bottom: 404.375px;
  background: rgba(0, 0, 0, 0);
  z-index: 73;
}
.see-all {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 16.875px;
  bottom: 14.375px;
  color: #679dc4;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 74;
}
.activity {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14.375px;
  right: 283.75px;
  bottom: 12.5px;
  color: #9fa1a6;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 75;
}
.background-10 {
  position: absolute;
  width: 343.125px;
  height: 449.375px;
  right: 3.125px;
  bottom: 1.25px;
  background: #ffffff;
  border: 1.875px solid #f0f1f3;
  z-index: 21;
}
.background-11 {
  position: relative;
  width: 263.75px;
  height: 1.875px;
  margin: 105px 0 0 58.75px;
  background: #fdfdfd;
  z-index: 65;
}
.groups-12 {
  position: relative;
  width: 340px;
  height: 62.5px;
  margin: 1.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 58;
}
.send {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 247.5px;
  bottom: 33.75px;
  color: #565a63;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 63;
}
.negative-fifty {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 16.25px;
  bottom: 33.5px;
  color: #4f515b;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 62;
}
.image-13 {
  position: absolute;
  width: 31.25px;
  height: 31.25px;
  right: 291.25px;
  bottom: 15px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/txF15GswM5.png)
    no-repeat center;
  background-size: cover;
  z-index: 64;
}
.text-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15.625px;
  right: 121.25px;
  bottom: 10px;
  color: #9c9ea3;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 60;
}
.time-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 15.625px;
  bottom: 12.5px;
  color: #9ea0a4;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 59;
}
.to {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 12.5px;
  right: 265.625px;
  bottom: 12.5px;
  color: #6c6f77;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 12.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 61;
}
.background-14 {
  position: relative;
  width: 265.625px;
  height: 1.875px;
  margin: 1.875px 0 0 58.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/xaMCcbLzpw.png)
    no-repeat center;
  background-size: cover;
  z-index: 57;
}
.groups-15 {
  position: relative;
  width: 340px;
  height: 62.5px;
  margin: 1.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 50;
}
.send-16 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 247.5px;
  bottom: 34.375px;
  color: #5a5d69;
  font-family: Inter, var(--default-font-family);
  font-size: 13.125px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 55;
}
.negative-sixty {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 16.25px;
  bottom: 33.5px;
  color: #52565f;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 54;
}
.image-17 {
  position: absolute;
  width: 31.25px;
  height: 31.25px;
  right: 291.25px;
  bottom: 15px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/aQrT0GmY4i.png)
    no-repeat center;
  background-size: cover;
  z-index: 56;
}
.tm-ond-con-hw {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15px;
  right: 123.75px;
  bottom: 10.625px;
  color: #9b9da3;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 52;
}
.seven-twenty-six-twenty-three-fifty-six {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 15.625px;
  bottom: 11.625px;
  color: #a0a2a6;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 51;
}
.to-18 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 12.5px;
  right: 265.625px;
  bottom: 12.5px;
  color: #70727a;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 12.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 53;
}
.background-19 {
  position: relative;
  width: 266.25px;
  height: 1.875px;
  margin: 1.875px 0 0 58.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/u2fTKHcHY9.png)
    no-repeat center;
  background-size: cover;
  z-index: 49;
}
.groups-1a {
  position: relative;
  width: 340px;
  height: 62.5px;
  margin: 1.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 42;
}
.send-1b {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14.375px;
  right: 247.5px;
  bottom: 33.75px;
  color: #5e626e;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 14.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 47;
}
.negative-thirty-two {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 16.25px;
  bottom: 33.5px;
  color: #63666e;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 46;
}
.image-1c {
  position: absolute;
  width: 31.25px;
  height: 31.25px;
  right: 291.25px;
  bottom: 15px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/QLs0ch9rHs.png)
    no-repeat center;
  background-size: cover;
  z-index: 48;
}
.tdvrtch-jvkef {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15.625px;
  right: 128.75px;
  bottom: 10.625px;
  color: #a1a3a8;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 44;
}
.seven-twenty-eighteen-twenty-one {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 17.5px;
  bottom: 12.5px;
  color: #a6a8ac;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 43;
}
.to-1d {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 12.5px;
  right: 265.625px;
  bottom: 12.5px;
  color: #74767d;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 12.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 45;
}
.background-1e {
  position: relative;
  width: 265px;
  height: 1.875px;
  margin: 1.875px 0 0 58.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/rye1BKFO7g.png)
    no-repeat center;
  background-size: cover;
  z-index: 41;
}
.groups-1f {
  position: relative;
  width: 340px;
  height: 63.125px;
  margin: 1.875px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 34;
}
.send-20 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 247.5px;
  bottom: 35px;
  color: #5f636e;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 39;
}
.negative-one-fifty {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14.375px;
  right: 16.25px;
  bottom: 34.375px;
  color: #5e626a;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 14.375px;
  text-align: left;
  white-space: nowrap;
  z-index: 38;
}
.image-21 {
  position: absolute;
  width: 30.625px;
  height: 31.25px;
  right: 291.875px;
  bottom: 15.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/889hOOyBcK.png)
    no-repeat center;
  background-size: cover;
  z-index: 40;
}
.seven-nineteen-twenty-two-eleven {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 17.5px;
  bottom: 13.125px;
  color: #abacb0;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 35;
}
.tm-ond-con-hw-22 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15px;
  right: 123.75px;
  bottom: 11.25px;
  color: #a0a2a7;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 36;
}
.to-23 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 13.125px;
  right: 265.625px;
  bottom: 13.125px;
  color: #7b7f86;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: center;
  white-space: nowrap;
  z-index: 37;
}
.background-24 {
  position: relative;
  width: 263.75px;
  height: 1.875px;
  margin: 1.875px 0 0 59.375px;
  background: #fcfcfc;
  z-index: 33;
}
.groups-25 {
  position: relative;
  width: 340px;
  height: 64.375px;
  margin: 1.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 26;
}
.send-26 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 247.5px;
  bottom: 36.25px;
  color: #5b5f6c;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 31;
}
.minus-60 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14.375px;
  right: 16.25px;
  bottom: 35.625px;
  color: #5f626f;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 30;
}
.image-27 {
  position: absolute;
  width: 30.625px;
  height: 31.25px;
  right: 291.875px;
  bottom: 17.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/XoVuD1RwqA.png)
    no-repeat center;
  background-size: cover;
  z-index: 32;
}
.tmo-nd-con-hw {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15.625px;
  right: 123.75px;
  bottom: 12.5px;
  color: #9d9ea3;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 28;
}
.text-20 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 15.625px;
  bottom: 14.375px;
  color: #a7a8ac;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 27;
}
.to-28 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 13.125px;
  right: 265.625px;
  bottom: 14.375px;
  color: #72737a;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: center;
  white-space: nowrap;
  z-index: 29;
}
.groups-29 {
  position: relative;
  width: 338.125px;
  height: 20px;
  margin: 2.5px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 22;
}
.text-22 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 7.5px;
  right: 12.5px;
  bottom: -0.63px;
  color: #98c2a9;
  font-family: Inter, var(--default-font-family);
  font-size: 6.875px;
  font-weight: 400;
  line-height: 7.5px;
  text-align: left;
  white-space: nowrap;
  z-index: 23;
}
.image-2a {
  position: absolute;
  width: 49.375px;
  height: 6.875px;
  right: 227.5px;
  bottom: -0.63px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/jsSD57E0LV.png)
    no-repeat center;
  background-size: cover;
  z-index: 24;
}
.image-2b {
  position: absolute;
  width: 23.75px;
  height: 5.625px;
  right: 293.125px;
  bottom: -0.63px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/wcVMtNcodJ.png)
    no-repeat center;
  background-size: cover;
  z-index: 25;
}
.groups-2c {
  position: absolute;
  width: 343.125px;
  height: 62.5px;
  right: 5.625px;
  bottom: 345.625px;
  background: rgba(0, 0, 0, 0);
  z-index: 66;
}
.minus-208 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 14px;
  right: 16.875px;
  bottom: 34.75px;
  color: #5a5d68;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  white-space: nowrap;
  z-index: 70;
}
.send-2d {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.75px;
  right: 248.125px;
  bottom: 34.375px;
  color: #575b66;
  font-family: Inter, var(--default-font-family);
  font-size: 12.5px;
  font-weight: 400;
  line-height: 13.75px;
  text-align: left;
  white-space: nowrap;
  z-index: 71;
}
.image-2e {
  position: absolute;
  width: 31.25px;
  height: 31.25px;
  right: 291.875px;
  bottom: 15.625px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/4Shs2gN4x2.png)
    no-repeat center;
  background-size: cover;
  z-index: 72;
}
.tmo-nd-con-hw-2f {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 15px;
  right: 124.375px;
  bottom: 11.25px;
  color: #9a9ca1;
  font-family: Inter, var(--default-font-family);
  font-size: 11.25px;
  font-weight: 400;
  line-height: 13.615px;
  text-align: left;
  white-space: nowrap;
  z-index: 68;
}
.text-26 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 13.125px;
  right: 16.25px;
  bottom: 13.125px;
  color: #a4a6ab;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 13.125px;
  text-align: left;
  white-space: nowrap;
  z-index: 67;
}
.to-30 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 14.375px;
  height: 12.5px;
  right: 266.25px;
  bottom: 13.125px;
  color: #707379;
  font-family: Inter, var(--default-font-family);
  font-size: 11.875px;
  font-weight: 400;
  line-height: 12.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 69;
}
.groups-31 {
  position: relative;
  width: 369.375px;
  height: 76.875px;
  margin: -1.25px 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 6;
}
.background-32 {
  position: absolute;
  width: 369.375px;
  height: 76.875px;
  right: 0;
  bottom: 0;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/NJZmqb2mYA.png)
    no-repeat center;
  background-size: cover;
  z-index: 8;
}
.groups-33 {
  position: relative;
  width: 369.375px;
  height: 70px;
  margin: 0 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 7;
}
.button {
  position: absolute;
  width: 136.875px;
  height: 56.25px;
  right: 155px;
  bottom: 6.875px;
  background: rgba(0, 0, 0, 0);
  z-index: 13;
}
.background-34 {
  position: relative;
  width: 131.875px;
  height: 53.125px;
  margin: 1.25px 0 0 3.125px;
  background: #fefefe;
  border: 0.63px solid #e2e3e4;
  z-index: 14;
  border-radius: 13.125px;
}
.receive {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 16.25px;
  right: 23.125px;
  bottom: 18.125px;
  color: #4a4d5e;
  font-family: Inter, var(--default-font-family);
  font-size: 14.375px;
  font-weight: 400;
  line-height: 16.25px;
  text-align: left;
  white-space: nowrap;
  z-index: 16;
}
.image-35 {
  position: absolute;
  width: 16.25px;
  height: 15.625px;
  right: 88.75px;
  bottom: 18.125px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/ZBAu7UdT7b.png)
    no-repeat center;
  background-size: cover;
  z-index: 15;
}
.button-36 {
  position: absolute;
  width: 134.375px;
  height: 55.625px;
  right: 13.75px;
  bottom: 6.875px;
  background: rgba(0, 0, 0, 0);
  z-index: 9;
}
.background-37 {
  position: relative;
  width: 130px;
  height: 53.125px;
  margin: 0.63px 0 0 2.5px;
  background: #007ffd;
  border: 0.63px solid #1d81dc;
  z-index: 10;
  border-radius: 11.25px;
}
.send-38 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 18.75px;
  right: 31.875px;
  bottom: 16.875px;
  color: #a9e0f4;
  font-family: Inter, var(--default-font-family);
  font-size: 15px;
  font-weight: 400;
  line-height: 18.153px;
  text-align: left;
  white-space: nowrap;
  z-index: 12;
}
.image-39 {
  position: absolute;
  width: 16.875px;
  height: 18.125px;
  right: 77.5px;
  bottom: 16.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/zZd7QMwiHw.png)
    no-repeat center;
  background-size: cover;
  z-index: 11;
}
.image-3a {
  position: absolute;
  width: 53.125px;
  height: 53.125px;
  right: 300.625px;
  bottom: 8.75px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/nXAHhQmNv1.png)
    no-repeat center;
  background-size: cover;
  z-index: 17;
}
.background-3b {
  position: relative;
  width: 8.125px;
  height: 8.125px;
  margin: 8.125px 0 0 38.125px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/LjCeL2gC7F.png)
    no-repeat center;
  background-size: cover;
  z-index: 18;
}
.groups-3c {
  position: relative;
  width: 369.375px;
  height: 44.375px;
  margin: 0 0 0 0;
  background: rgba(0, 0, 0, 0);
  z-index: 2;
}
.image-3d {
  position: absolute;
  width: 10.625px;
  height: 10.625px;
  right: 264.375px;
  bottom: 16.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/3d5kYq4X4m.png)
    no-repeat center;
  background-size: cover;
  z-index: 5;
}
.image-3e {
  position: absolute;
  width: 10.625px;
  height: 10px;
  right: 178.75px;
  bottom: 17.5px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/x5v8Bqmiu7.png)
    no-repeat center;
  background-size: cover;
  z-index: 4;
}
.image-3f {
  position: absolute;
  width: 7.5px;
  height: 10.625px;
  right: 96.25px;
  bottom: 16.875px;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/VXZPnVtoXm.png)
    no-repeat center;
  background-size: cover;
  z-index: 3;
}
.background-40 {
  position: absolute;
  width: 369.375px;
  height: 45px;
  right: 0;
  bottom: 0;
  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/2636xD5uwH.png)
    no-repeat center;
  background-size: cover;
  z-index: 1;
}
`}</style>

      <div className="main-container">
        <div className="root">
          <div className="groups">
            <span className="time">{formData.time || "10:56PM"}</span>
            <div className="image"></div>
            <div className="image-1"></div>
            <div className="image-2"></div>
            <div className="image-3"></div>
            <div className="image-4"></div>
            <div className="image-5"></div>
            <div className="image-6"></div>
          </div>
          <div className="groups-7">
            <div className="flex-row">
              <div className="image-8"></div>
              <div className="image-9"></div>
              <div className="image-a"></div>
            </div>
            <span className="usdt">USDT</span><span className="tether-usd">Tether USD</span>
          </div>
          <div className="groups-b">
            <div className="groups-c">
              <div className="background">
                <span className="my-balance">My Balance</span><span className="usdt-d">{formData.amount || "0.17"}USDT</span><span className="dollar">$0.16</span>
              </div>
            </div>
            <div className="groups-e">
              <div className="groups-f">
                <span className="see-all">See All</span><span className="activity">Activity</span>
              </div>
              <div className="background-10">
                <div className="background-11"></div>
                <div className="groups-12">
                  <span className="send">Send</span  ><span className="negative-fifty">-50</span>
                  <div className="image-13"></div>
                  <span className="text-info">TCzPeq6MpD...c2pYygR8</span  ><span className="time-info">7-3017:45</span  ><span className="to">To</span>
                </div>
                <div className="background-14"></div>
                <div className="groups-15">
                  <span className="send-16">Send</span  ><span className="negative-sixty">-60</span>
                  <div className="image-17"></div>
                  <span className="tm-ond-con-hw">TMoNDConHw...RorjrLd8</span  ><span className="seven-twenty-six-twenty-three-fifty-six"
                  >7-2623:56</span><span className="to-18">To</span>
                </div>
                <div className="background-19"></div>
                <div className="groups-1a">
                  <span className="send-1b">Send</span  ><span className="negative-thirty-two">-32</span>
                  <div className="image-1c"></div>
                  <span className="tdvrtch-jvkef">TD4V38RTCh.jVkeFJSd</span  ><span className="seven-twenty-eighteen-twenty-one">7-2018:21</span  ><span className="to-1d">To</span>
                </div>
                <div className="background-1e"></div>
                <div className="groups-1f">
                  <span className="send-20">Send</span  ><span className="negative-one-fifty">-150</span>
                  <div className="image-21"></div>
                  <span className="seven-nineteen-twenty-two-eleven">7-1922:11</span  ><span className="tm-ond-con-hw-22">TMoNDConHw...RorjrLd8</span  ><span className="to-23">To</span>
                </div>
                <div className="background-24"></div>
                <div className="groups-25">
                  <span className="send-26">Send</span  ><span className="minus-60">-60</span>
                  <div className="image-27"></div>
                  <span className="tmo-nd-con-hw">TMoNDConHw...RorjrLd8</span  ><span className="text-20">7-1917:45</span  ><span className="to-28">To</span>
                </div>
                <div className="groups-29">
                  <span className="text-22">1C4017</span>
                  <div className="image-2a"></div>
                  <div className="image-2b"></div>
                </div>
              </div>
              <div className="groups-2c">
                <span className="minus-208">-208</span><span className="send-2d">Send</span>
                <div className="image-2e"></div>
                <span className="tmo-nd-con-hw-2f">TMoNDConHw...RorjrLd8</span><span className="text-26">7-3023:18</span><span className="to-30">To</span>
              </div>
            </div>
          </div>
          <div className="groups-31">
            <div className="background-32">
              <div className="groups-33">
                <div className="button">
                  <div className="background-34">
                    <span className="receive">Receive</span>
                    <div className="image-35"></div>
                  </div>
                </div>
                <div className="button-36">
                  <div className="background-37">
                    <span className="send-38">Send</span>
                    <div className="image-39"></div>
                  </div>
                </div>
                <div className="image-3a"><div className="background-3b"></div></div>
              </div>
            </div>
          </div>
          <div className="groups-3c">
            <div className="image-3d"></div>
            <div className="image-3e"></div>
            <div className="image-3f"></div>
          </div>
        </div>
        <div className="background-40"></div>
      </div>

    </>
  )
}

export default Template7