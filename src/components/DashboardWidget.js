import {
  Button,
  Card,
  Col,
  Divider,
  Image,
  List,
  Progress,
  Row,
  Table,
  Tag,
} from "antd";
import React, { useState } from "react";
import { SlCalender, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { AiFillEye, AiOutlineDown } from "react-icons/ai";
import { IoCubeSharp } from "react-icons/io5";
import { BsGraphUp, BsArrowDownUp } from "react-icons/bs";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { FaUserGroup, FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import natureImage from "../images/nature.jpg";
import profileImage from "../images/profileimage.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { increment, decrement } from "../Redux/action";
import { connect } from "react-redux";

function DashboardWidget({ counter, increment, decrement }) {
  //   const number=[2,3,6,8,9,12,13,14]
  // const evenNumbers=number.filter((item)=>{
  //   return item%2===0
  // })
  // const oddNumbers=number.filter((item)=>{
  //   return item%2==!0
  // })
  // console.log("odd numbers=",oddNumbers)
  // console.log("even numbers=",evenNumbers)
  // const arrNumber=[1,9,6,4]
  // const sumOfNumbers=(arr)=>{
  //   return arr.reduce((pre,cur)=>{
  // return pre+cur
  //   })
  // }
  // console.log("sum of numbers",sumOfNumbers(arrNumber));
  // const arrNumber = [1, 2, 3, 4, 5, 6, 9, 10];
  // const missArray = [];
  // const missValue = (arr) => {
  //   const minValue = Math.min(...arr);
  //   const maxValue = Math.max(...arr);
  //   for (let i = minValue; i <= maxValue; i++) { // Include the maxValue in the loop
  //     if (arr.indexOf(i) < 0) {
  //       missArray.push(i);
  //     }
  //   }
  //   return missArray;
  // }

  // console.log(missValue(arrNumber));

  const twoColors = {
    "0%": "#87d068",
    "100%": "#87d068",
  };

  const timeList = [
    {
      id: 0,
      name: "Workotick",
      time: "2:30",
      color: "lightpink",
    },
    {
      id: 1,
      name: "Flip Mart",
      time: "2:30",
      color: "lightblue",
    },
    {
      id: 2,
      name: "Native Brain",
      time: "2:30",
      color: "lightpink",
    },
    {
      id: 3,
      name: "Workotick",
      time: "2:30",
      color: "lightpink",
    },
    {
      id: 4,
      name: "Flip Mart",
      time: "2:30",
      color: "lightblue",
    },
    {
      id: 5,
      name: "Native Brain",
      time: "2:30",
      color: "lightpink",
    },
    {
      id: 6,
      name: "Workotick",
      time: "2:30",
      color: "lightpink",
    },
    {
      id: 7,
      name: "Flip Mart",
      time: "2:30",
      color: "lightblue",
    },
    {
      id: 8,
      name: "Native Brain",
      time: "2:30",
      color: "lightpink",
    },
  ];
  const columns = [
    {
      title: "Member",
      dataIndex: "name",
      width: "10%",
      render: (_, record) => (
        <>
          <span style={{ fontSize: "0.8rem" }}>{record.name}</span>
        </>
      ),
    },
    {
      title: (
        <span style={{ fontSize: "0.8rem" }}>
          Clock-in
          <BsArrowDownUp style={{ marginLeft: 8 }} />
        </span>
      ),
      dataIndex: "age",
      width: "8%",
    },
    {
      // title: "Active Time(hrs)",
      title: (
        <span style={{ fontSize: "0.8rem" }}>
          Active Time(hrs)
          <BsArrowDownUp style={{ marginLeft: 8 }} />
        </span>
      ),
      dataIndex: "address",
      width: "12%",
    },
    {
      //title: "Log time (hrs)",
      title: (
        <span style={{ fontSize: "0.8rem" }}>
          Log time (hrs)
          <BsArrowDownUp style={{ marginLeft: 8 }} />
        </span>
      ),
      dataIndex: "logtime",
      width: "12%",
    },
    {
      // title: "Breake time (hrs)",
      title: (
        <span style={{ fontSize: "0.8rem" }}>
          Breake time (hrs)
          <BsArrowDownUp style={{ marginLeft: 8 }} />
        </span>
      ),
      dataIndex: "breaktime",
      width: "13%",
    },
    {
      //title: "Clock out ",
      title: (
        <span style={{ fontSize: "0.8rem" }}>
          Clock out
          <BsArrowDownUp style={{ marginLeft: 8 }} />
        </span>
      ),
      dataIndex: "clockout",
      width: "10%",
    },
    {
      // title: "Remaining time ",
      title: (
        <span style={{ fontSize: "0.8rem" }}>
          Remaining time
          <BsArrowDownUp style={{ marginLeft: 8 }} />
        </span>
      ),
      dataIndex: "remainingtime",
      width: "12%",

      render: (_, record) => (
        <>
          <Button type="primary" size="small">
            {record.remainingtime}
          </Button>
        </>
      ),
    },
  ];
  const tabledata = [
    {
      key: "1",
      name: "Priya Patel",
      age: "7:00Am",
      address: "5:20",
      logtime: "05:20",
      breaktime: "0:02",
      clockout: "07:10AM ",
      remainingtime: "05:20",
    },
    {
      key: "2",
      name: "Mohamad Osama",
      age: "NA",
      address: "NA",
      logtime: "NA",
      breaktime: "NA",
      clockout: "NA",
      remainingtime: "NA",
    },
    {
      key: "3",
      name: "Danish",
      age: "7:00Am",
      address: "3:02",
      logtime: "3:02",
      breaktime: "0:44",
      clockout: "11:20AM ",
      remainingtime: "10:33",
    },
    {
      key: "4",
      name: "Basit",
      age: "7:00Am",
      address: "11:22",
      logtime: "11:22",
      breaktime: "0:22",
      clockout: "11:50AM ",
      remainingtime: "03:02",
    },
    {
      key: "5",
      name: "Azhar",
      age: "7:00Am",
      address: "NA",
      logtime: "05:20",
      breaktime: "0:02",
      clockout: "07:10AM ",
      remainingtime: "05:20",
    },
  ];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ["Arham", "Danish", "Azhar", "Arham", "Danish"],
    datasets: [
      {
        data: [12, 10, 8, 6, 4, 0],
        //data: dataValues,
        backgroundColor: "#1677ff",
        borderColor: "#1677ff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  const widgetList = [
    {
      id: 1,
      icon: <FaUserGroup size={20} style={{ color: "#809fff" }} />,
      iconDivColor: "#bfcfff",
      contentTitle: "Total Team Members",
      contentNum: "10",
      statsIcon: <FaArrowTrendUp />,
      statsNum: "8.5%",
      statsColor: "rgb(8, 206, 117)",
      statsContent: "Up from yesterday",
    },
    {
      id: 2,
      icon: <IoCubeSharp size={20} style={{ color: "#ffa500" }} />,
      iconDivColor: "rgb(250, 226, 166)",
      contentTitle: "Active Members",
      contentNum: "120",
      statsIcon: <FaArrowTrendDown />,
      statsNum: "4.3%",
      statsColor: "red",
      statsContent: "Down from yesterday",
    },
    {
      id: 3,
      icon: <BsGraphUp size={20} style={{ color: "rgb(8, 206, 117)" }} />,
      iconDivColor: "rgb(185, 239, 193)",
      contentTitle: "On Break",
      contentNum: "05",
      statsIcon: <FaArrowTrendDown />,
      statsNum: "4.3%",
      statsColor: "red",
      statsContent: "Down from yesterday",
    },
    {
      id: 4,
      icon: <IoCubeSharp size={20} style={{ color: "#ffa500" }} />,
      iconDivColor: "rgb(250, 226, 166)",
      contentTitle: "Clocked out Members",
      contentNum: "10",
      statsIcon: <FaArrowTrendDown />,
      statsNum: "4.3%",
      statsColor: "red",
      statsContent: "Down from yesterday",
    },
    {
      id: 5,
      icon: (
        <PiClockCounterClockwiseBold
          size={20}
          style={{ color: "rgb(237, 156, 124)" }}
        />
      ),
      iconDivColor: "rgb(241, 210, 198)",
      contentTitle: "Yet to start members",
      contentNum: "120",
      statsIcon: <FaArrowTrendUp />,
      statsNum: "8.5%",
      statsColor: "rgb(8, 206, 117)",
      statsContent: "Up from yesterday",
    },
  ];
  return (
    <div className="mainDiv" style={{ padding: "0 10px", marginTop: "2rem" }}>
      <div style={{display: "flex",gap:"10px" ,marginBottom:"0.5rem" }}>
          <div  style={{fontWeight: "bold"  }}>
            Counter:{" "}
          </div>
          <div>
            {counter}
            </div>
        </div>
      <div>
        
        <div className="iconDiv">
          <Button type="primary" onClick={increment}>
            Increment
          </Button>
          <Button style={{backgroundColor:"lightgray"}} onClick={decrement}>
            Decrement
          </Button>
        </div>
      </div>
      <div>
        <h4>Dashboard</h4>
      </div>
      <div className="secendWidget">
        <div className="cardDiv">
          <div className="cardWidget">
            <div className="innercontent">My Report</div>
            <div>
              <Button type="primary">Team Report</Button>
            </div>
          </div>
        </div>
        <div className="cardDiv">
          <div className="cardWidget">
            <SlCalender
              type="large"
              style={{ color: "gray", fontWeight: "bold" }}
            />
            <div className="innercontent">Today, 12, June</div>
            <div>
              <SlArrowLeft size={7} /> <SlArrowRight size={7} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="divRealTime">
          <div>Real-Time</div>
          <div>
            <Button type="primary" className="divRealTimeButton">
              <AiFillEye style={{ gap: "10px" }} />
              View
            </Button>
          </div>
        </div>
      </div>

      <div className="mainWidgetDiv">
        {/* --------Widget----- */}
        {widgetList.map((data) => (
          <div className="widgetDiv" key={data.id}>
            <div className="innnerWidgetDiv">
              <div
                className="widgetIcon"
                style={{ backgroundColor: data.iconDivColor }}
              >
                {data.icon}
              </div>
              <div className="widgetContent">
                <div className="widgetContentTitle">{data.contentTitle}</div>
                <div className="widgetContentNum">{data.contentNum}</div>
              </div>
            </div>
            <div className="widgetStatsDiv">
              <span className="statsColor" style={{ color: data.statsColor }}>
                {data.statsIcon}
                &nbsp;{data.statsNum}
              </span>{" "}
              {data.statsContent}
            </div>
          </div>
        ))}
        {/* --------------------- */}
      </div>
      <div style={{ display: "flex", paddingTop: "1rem" }}>
        <Row>
          <Col xs={24} sm={24} md={16} lg={16} style={{ paddingRight: "10px" }}>
            <Card>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem",
                  }}
                >
                  <div style={{ fontWeight: 600 }}>Recent Activity</div>
                  <div>
                    <Button
                      type="primary"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      View All
                    </Button>
                  </div>
                </div>
              </div>
              <Row gutter={16}>
                {[...Array(9)].map((_, index) => (
                  <Col span={8}>
                    <div key={index} className="custom-card">
                      {/* Card content */}
                      <div>
                        <Image className="cardImage" src={natureImage} />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                          padding: "0.5rem",
                          backgroundColor: "#F5F5F5",
                        }}
                      >
                        <div className="profileImage">
                          <Image src={profileImage} />
                        </div>
                        <div style={{}}>
                          <div style={{ fontWeight: 600, fontSize: "0.5" }}>
                            Benyameen
                          </div>
                          <div className="userName">Android</div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          backgroundColor: "#F5F5F5",
                          padding: "0 0.5rem",
                          fontWeight: 600,
                          fontSize: "0.5",
                        }}
                      >
                        <div>Activity</div>
                        <div>74%</div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#F5F5F5",
                          padding: "0 0.5rem",
                        }}
                      >
                        <Progress percent={74} strokeColor={twoColors} />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          backgroundColor: "#F5F5F5",
                          padding: "0 0.5rem",
                          fontSize: "0.6rem",
                        }}
                      >
                        <div>Project:</div>
                        <div>Workotick</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          backgroundColor: "#F5F5F5",
                          padding: "0 0.5rem",
                          fontSize: "0.6rem",
                        }}
                      >
                        <div>Time:</div>
                        <div>2:00 Am</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Card>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontWeight: 600 }}>Time Summary</div>
                  <div>
                    <Button
                      type="primary"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <AiFillEye />
                      Contribution
                    </Button>
                  </div>
                </div>
                <Divider />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 600,
                  }}
                >
                  <div>Project</div>
                  <div>Time Logded</div>
                </div>
                <Divider />
              </div>
              <div>
                <List
                  dataSource={timeList}
                  renderItem={(item, index) => (
                    <List.Item key={index} data={item.id}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div>{item.name}</div>
                        <div>
                          <Tag color={item.color}> {item.time}</Tag>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
              <div
                style={{
                  height: "300px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="container1">
                  <div className="chart-container1">
                    <Bar
                      style={{ height: "200px" }}
                      data={data}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <div style={{ paddingTop: "1rem" }}>
        <Table columns={columns} dataSource={tabledata} />;
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardWidget);
