import React from 'react'

function Template9() {
  return (
    <>
    <style>{`
    
      :root {
            --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
                "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
                "Source Han Sans CN", sans-serif;
        }

        .main-container {
            overflow: hidden;
            background-color: #000;
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
        }

        .flex-row-ee {
            position: relative;
            width: 369.375px;
            height: 289.375px;
            margin: 0 0 0 0;
            z-index: 46;
        }

        .groups {
            position: absolute;
            width: 369.375px;
            height: 38.125px;
            right: 0;
            bottom: 251.25px;
            background: #000;
            z-index: 46;
        }

        .button {
            position: absolute;
            width: 58.75px;
            height: 24.375px;
            right: 291.875px;
            bottom: 8.75px;
            background: rgba(0, 0, 0, 0);
            z-index: 50;
        }

        .background {
            position: relative;
            width: 53.75px;
            height: 21.25px;
            margin: 3.125px 0 0 2.5px;
            background: #30d157;
            border: 0.63px solid #36df60;
            z-index: 51;
            border-radius: 10.781px;
        }

        .time {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 13.125px;
            right: 10.625px;
            bottom: 4.375px;
            color: #9eecad;
            font-family: Inter, var(--default-font-family);
            font-size: 13.125px;
            font-weight: 700;
            line-height: 13.125px;
            text-align: left;
            white-space: nowrap;
            z-index: 52;
        }

        .network-4g {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 12.5px;
            right: 41.875px;
            bottom: 10px;
            color: #ababab;
            font-family: Inter, var(--default-font-family);
            font-size: 11.875px;
            font-weight: 400;
            line-height: 12.5px;
            text-align: left;
            white-space: nowrap;
            z-index: 48;
        }

        .image {
            position: absolute;
            width: 24.375px;
            height: 12.5px;
            right: 13.75px;
            bottom: 9.375px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/O2nYhPEHhv.png) no-repeat center;
            background-size: cover;
            z-index: 47;
        }

        .image-1 {
            position: absolute;
            width: 16.875px;
            height: 10.625px;
            right: 63.125px;
            bottom: 10px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/OjDXYAnEgS.png) no-repeat center;
            background-size: cover;
            z-index: 49;
        }

        .groups-2 {
            position: absolute;
            width: 369.375px;
            height: 261.875px;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0);
            z-index: 34;
        }

        .groups-3 {
            position: relative;
            width: 369.375px;
            height: 46.25px;
            margin: 11.875px 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 44;
            overflow: visible auto;
        }

        .image-4 {
            position: relative;
            width: 7.5px;
            height: 16.25px;
            margin: 17.5px 0 0 23.75px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/wszEYqNHbR.png) no-repeat center;
            background-size: cover;
            z-index: 45;
        }

        .groups-5 {
            position: relative;
            width: 369.375px;
            height: 125.625px;
            margin: 1.25px 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 40;
            overflow: visible auto;
        }

        .image-6 {
            position: relative;
            width: 39.375px;
            height: 39.375px;
            margin: 7.5px 0 0 165px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/EmrGi4Mp4j.png) no-repeat center;
            background-size: cover;
            z-index: 43;
        }

        .withdrawn {
            display: block;
            position: relative;
            height: 25px;
            margin: 8.75px 0 0 56.25px;
            color: #d9d9d9;
            font-family: Inter, var(--default-font-family);
            font-size: 22.5px;
            font-weight: 700;
            line-height: 25px;
            text-align: left;
            white-space: nowrap;
            z-index: 42;
        }

        .withdrawn-amount {
            display: block;
            position: relative;
            height: 17px;
            margin: 5.625px 0 0 151.25px;
            color: #7a7a7a;
            font-family: Inter, var(--default-font-family);
            font-size: 14.375px;
            font-weight: 400;
            line-height: 17px;
            text-align: left;
            white-space: nowrap;
            z-index: 41;
        }

        .groups-7 {
            position: relative;
            width: 369.375px;
            height: 63.75px;
            margin: 8.125px 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 36;
        }

        .image-8 {
            position: absolute;
            width: 31.25px;
            height: 31.25px;
            right: 314.375px;
            bottom: 21.875px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/HRQ96FoKzA.png) no-repeat center;
            background-size: cover;
            z-index: 39;
        }

        .completed {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 18.75px;
            right: 23.125px;
            bottom: 27.5px;
            color: #9e9e9e;
            font-family: Inter, var(--default-font-family);
            font-size: 15px;
            font-weight: 400;
            line-height: 18.153px;
            text-align: left;
            white-space: nowrap;
            z-index: 37;
        }

        .status {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 15.625px;
            right: 255.625px;
            bottom: 30px;
            color: #bcbcbc;
            font-family: Inter, var(--default-font-family);
            font-size: 14.375px;
            font-weight: 700;
            line-height: 15.625px;
            text-align: left;
            white-space: nowrap;
            z-index: 38;
        }

        .background-9 {
            position: relative;
            width: 369.375px;
            height: 1.875px;
            margin: 0.63px 0 0 0;
            background: #080808;
            z-index: 35;
        }

        .groups-a {
            position: relative;
            width: 369.375px;
            height: 327.5px;
            margin: 20.625px 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 10;
            overflow: visible auto;
        }

        .groups-b {
            position: relative;
            width: 369.375px;
            height: 67.5px;
            margin: 0 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 29;
            overflow: visible auto;
        }

        .flex-row-bb {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            width: 303.75px;
            height: 19.375px;
            margin: 12.5px 0 0 23.125px;
            z-index: 33;
        }

        .address {
            flex-shrink: 0;
            position: relative;
            height: 16.25px;
            color: #c5c5c5;
            font-family: Inter, var(--default-font-family);
            font-size: 15px;
            font-weight: 400;
            line-height: 16.25px;
            text-align: left;
            white-space: nowrap;
            z-index: 33;
        }

        .tnypi-aof-twsxv {
            flex-shrink: 0;
            position: relative;
            height: 19.375px;
            color: #959595;
            font-family: Inter, var(--default-font-family);
            font-size: 14.375px;
            font-weight: 400;
            line-height: 19.375px;
            text-align: left;
            white-space: nowrap;
            z-index: 32;
        }

        .image-c {
            position: relative;
            width: 11.875px;
            height: 11.875px;
            margin: -6.25px 0 0 331.875px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/KVwRCpYOzD.png) no-repeat center;
            background-size: cover;
            z-index: 30;
        }

        .qwwhgqntqkcp {
            display: block;
            position: relative;
            height: 19.375px;
            margin: -5px 0 0 166.875px;
            color: #909090;
            font-family: Inter, var(--default-font-family);
            font-size: 15.625px;
            font-weight: 400;
            line-height: 18.91px;
            text-align: left;
            white-space: nowrap;
            z-index: 31;
        }

        .groups-d {
            position: relative;
            width: 369.375px;
            height: 50px;
            margin: 1.875px 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 25;
        }

        .price {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 16.25px;
            right: 308.75px;
            bottom: 20px;
            color: #d3d3d3;
            font-family: Inter, var(--default-font-family);
            font-size: 14.375px;
            font-weight: 400;
            line-height: 16.25px;
            text-align: left;
            white-space: nowrap;
            z-index: 28;
        }

        .usdt {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 18px;
            right: 23.125px;
            bottom: 17.625px;
            color: #969696;
            font-family: Inter, var(--default-font-family);
            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
            text-align: left;
            white-space: nowrap;
            z-index: 26;
        }

        .image-e {
            position: absolute;
            width: 13.75px;
            height: 13.75px;
            right: 291.875px;
            bottom: 20.625px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/k6zCPATNEx.png) no-repeat center;
            background-size: cover;
            z-index: 27;
        }

        .groups-f {
            position: relative;
            width: 369.375px;
            height: 50.625px;
            margin: 0.63px 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 21;
        }

        .tron-trc {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 18.75px;
            right: 23.125px;
            bottom: 16.875px;
            color: #969696;
            font-family: Inter, var(--default-font-family);
            font-size: 14.375px;
            font-weight: 400;
            line-height: 17.397px;
            text-align: left;
            white-space: nowrap;
            z-index: 22;
        }

        .network {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 15.625px;
            right: 283.75px;
            bottom: 20px;
            color: #b9b9b9;
            font-family: Inter, var(--default-font-family);
            font-size: 15px;
            font-weight: 400;
            line-height: 15.625px;
            text-align: left;
            white-space: nowrap;
            z-index: 24;
        }

        .image-10 {
            position: absolute;
            width: 15px;
            height: 15px;
            right: 121.875px;
            bottom: 19.375px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/eWVkqCexs4.png) no-repeat center;
            background-size: cover;
            z-index: 23;
        }

        .groups-11 {
            position: relative;
            width: 369.375px;
            height: 50.625px;
            margin: 0.63px 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 18;
        }

        .network-fee {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 16.25px;
            right: 256.875px;
            bottom: 20px;
            color: #d0d0d0;
            font-family: Inter, var(--default-font-family);
            font-size: 15px;
            font-weight: 400;
            line-height: 16.25px;
            text-align: left;
            white-space: nowrap;
            z-index: 20;
        }

        .usdt-12 {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 16.875px;
            right: 23.125px;
            bottom: 18.75px;
            color: #848484;
            font-family: Inter, var(--default-font-family);
            font-size: 14.375px;
            font-weight: 400;
            line-height: 16.875px;
            text-align: left;
            white-space: nowrap;
            z-index: 19;
        }

        .groups-13 {
            position: relative;
            width: 369.375px;
            height: 50.625px;
            margin: 0.63px 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 14;
        }

        .transaction-id {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 16.875px;
            right: 241.875px;
            bottom: 19.375px;
            color: #d2d2d2;
            font-family: Inter, var(--default-font-family);
            font-size: 15px;
            font-weight: 400;
            line-height: 16.875px;
            text-align: left;
            white-space: nowrap;
            z-index: 17;
        }

        .transaction-id-text {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 17.5px;
            right: 43.125px;
            bottom: 18.125px;
            color: #989898;
            font-family: Inter, var(--default-font-family);
            font-size: 15px;
            font-weight: 400;
            line-height: 17.5px;
            text-align: left;
            white-space: nowrap;
            z-index: 16;
        }

        .image-14 {
            position: absolute;
            width: 11.875px;
            height: 12.5px;
            right: 25.625px;
            bottom: 20.625px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/cFCpPQbbT9.png) no-repeat center;
            background-size: cover;
            z-index: 15;
        }

        .groups-15 {
            position: relative;
            width: 369.375px;
            height: 53.125px;
            margin: 1.25px 0 0 0;
            background: rgba(0, 0, 0, 0);
            z-index: 11;
        }

        .submitted-time {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 16.875px;
            right: 234.375px;
            bottom: 22.5px;
            color: #cccccc;
            font-family: Inter, var(--default-font-family);
            font-size: 14.375px;
            font-weight: 700;
            line-height: 16.875px;
            text-align: left;
            white-space: nowrap;
            z-index: 13;
        }

        .submitted-time-text {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 18.75px;
            right: 23.125px;
            bottom: 20px;
            color: #888888;
            font-family: Inter, var(--default-font-family);
            font-size: 15px;
            font-weight: 400;
            line-height: 18.153px;
            text-align: left;
            white-space: nowrap;
            z-index: 12;
        }

        .flex-row-b {
            position: relative;
            width: 369.375px;
            height: 103.125px;
            margin: 24.375px 0 0 0;
            z-index: 7;
        }

        .button-16 {
            position: absolute;
            width: 327.5px;
            height: 51.25px;
            right: 21.25px;
            bottom: 51.875px;
            background: rgba(0, 0, 0, 0);
            z-index: 7;
        }

        .background-17 {
            position: relative;
            width: 321.875px;
            height: 47.5px;
            margin: 3.75px 0 0 3.125px;
            background: #bcfd30;
            border: 0.63px solid #9dc638;
            z-index: 8;
            border-radius: 21.875px;
        }

        .view-blockchain-explorer {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 17.5px;
            right: 68.125px;
            bottom: 15px;
            color: #324a13;
            font-family: Inter, var(--default-font-family);
            font-size: 13.125px;
            font-weight: 700;
            line-height: 15.884px;
            text-align: left;
            white-space: nowrap;
            z-index: 9;
        }

        .groups-18 {
            position: absolute;
            width: 369.375px;
            height: 100px;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0);
            z-index: 3;
        }

        .image-19 {
            position: absolute;
            width: 30.625px;
            height: 28.75px;
            right: 315.625px;
            bottom: 16.25px;
            background: #000000;
            z-index: 6;
        }

        .image-1a {
            position: absolute;
            width: 25.625px;
            height: 23.75px;
            right: 26.25px;
            bottom: 20.625px;
            background: #000000;
            z-index: 4;
        }

        .transaction-arrived {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            height: 19.375px;
            right: 59.375px;
            bottom: 21.25px;
            color: #c2c2c2;
            font-family: Inter, var(--default-font-family);
            font-size: 15px;
            font-weight: 400;
            line-height: 18.153px;
            text-align: left;
            white-space: nowrap;
            z-index: 5;
        }

        .background-1b {
            position: relative;
            width: 131.875px;
            height: 5px;
            margin: 21.875px 0 0 118.75px;
            background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-01-28/n7XDdPfQKH.png) no-repeat center;
            background-size: cover;
            z-index: 2;
        }


`}</style>
    
    <div className="main-container">
        <div className="flex-row-ee">
            <div className="groups">
                <div className="button">
                    <div className="background"><span className="time">9:37</span></div>
                </div>
                <span className="network-4g">4G</span>
                <div className="image"></div>
                <div className="image-1"></div>
            </div>
            <div className="groups-2">
                <div className="groups-3">
                    <div className="image-4"></div>
                </div>
                <div className="groups-5">
                    <div className="image-6"></div>
                    <span className="withdrawn">Withdrawn 700.7 USDT</span><span className="withdrawn-amount">~$700.84</span>
                </div>
                <div className="groups-7">
                    <div className="image-8"></div>
                    <span className="completed">Completed</span><span className="status">Status</span>
                </div>
                <div className="background-9"></div>
            </div>
        </div>
        <div className="groups-a">
            <div className="groups-b">
                <div className="flex-row-bb">
                    <span className="address">Address</span><span className="tnypi-aof-twsxv">TNyp9iAoFtWS5xv5YCC</span>
                </div>
                <div className="image-c"></div>
                <span className="qwwhgqntqkcp">Q7WWhG3Qn1tQKCp</span>
            </div>
            <div className="groups-d">
                <span className="price">Price</span><span className="usdt">$1/USDT</span>
                <div className="image-e"></div>
            </div>
            <div className="groups-f">
                <span className="tron-trc">Tron (TRC20)</span><span className="network">Network</span>
                <div className="image-10"></div>
            </div>
            <div className="groups-11">
                <span className="network-fee">Network fee</span><span className="usdt-12">2.3 USDT</span>
            </div>
            <div className="groups-13">
                <span className="transaction-id">Transaction ID</span><span className="transaction-id-text">3dcb4...50100</span>
                <div className="image-14"></div>
            </div>
            <div className="groups-15">
                <span className="submitted-time">Submitted time</span><span className="submitted-time-text">Oct 19,20259:35
                    PM</span>
            </div>
        </div>
        <div className="flex-row-b">
            <div className="button-16">
                <div className="background-17">
                    <span className="view-blockchain-explorer">View on blockchain explorer</span>
                </div>
            </div>
            <div className="groups-18">
                <div className="image-19"></div>
                <div className="image-1a"></div>
                <span className="transaction-arrived">Why hasn't my transaction arrived?</span>
            </div>
        </div>
        <div className="background-1b"></div>
        <div className="image-1c"></div>
        <div className="image-1d"></div>
    </div>
    </>
  )
}

export default Template9