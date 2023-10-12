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
import React from "react";
import { SlCalender, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { AiFillEye, AiOutlineDown } from "react-icons/ai";
import { IoCubeSharp } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
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
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function DashboardWidget() {
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
      title: 'Member',
      dataIndex: 'name',
      width: '20%',
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: 'Clock-in',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Active Time(hrs)',
      dataIndex: 'address',
      sorter: (a, b) => a.address - b.address,
      //width: '20%',
    },
    {
      title: 'Log time (hrs)',
      dataIndex: 'logtime',
      sorter: (a, b) => a.logtime - b.logtime,
    },
    {
      title: 'Breake time (hrs)',
      dataIndex: 'breaktime',
      sorter: (a, b) => a.breaktime - b.breaktime,
    },
    {
      title: 'Clock out ',
      dataIndex: 'clockout',
      sorter: (a, b) => a.clockout - b.clockout,
    },
    {
      title: 'Remaining time ',
      dataIndex: 'remainingtime',
      
      render: (_, record) => (
        <>
          <Button type="primary" size="small">
            {record.remainingtime}
          </Button>
        </>
      ),
      sorter: (a, b) => a.remainingtime - b.remainingtime,
    },
  ];
  const tabledata = [
    {
      key: '1',
      name: 'Priya Patel',
      age: "7:00Am",
      address: '5:20',
      logtime:"05:20",
      breaktime:"0:02",
      clockout:"07:10AM ",
      remainingtime:"05:20"
    },
    {
      key: '2',
      name: 'Mohamad Osama',
      age: "NA",
      address: 'NA',
      logtime:"NA",
      breaktime:"NA",
      clockout:"NA",
      remainingtime:"NA"
    },
    {
      key: '3',
      name: 'Danish',
      age: "7:00Am",
      address: '3:02',
      logtime:"3:02",
      breaktime:"0:44",
      clockout:"11:20AM ",
      remainingtime:"10:33"
    },
    {
      key: '4',
      name: 'Basit',
      age: "7:00Am",
      address: '11:22',
      logtime:"11:22",
      breaktime:"0:22",
      clockout:"11:50AM ",
      remainingtime:"03:02"
    },
    {
      key: '5',
      name: 'Azhar',
      age: "7:00Am",
      address: 'NA',
      logtime:"05:20",
      breaktime:"0:02",
      clockout:"07:10AM ",
      remainingtime:"05:20"
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
    labels: ['Arham', 'Danish', 'Azhar', 'Arham', 'Danish'],
    datasets: [
      {
        data: [12, 10, 8, 6, 4, 0],
        //data: dataValues,
        backgroundColor: '#1677ff',
        borderColor: '#1677ff',
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
  
  
  return (
    <div style={{ padding: "0 10px", marginTop: "2rem" }}>
      <div>
        <h4>Dashboard</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card size="small">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div>My Report</div>
            <div>
              <Button type="primary">Team Report</Button>
            </div>
          </div>
        </Card>
        <Card size="small">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <SlCalender />
            <div>Today, 12, June</div>
            <div>
              <SlArrowLeft size={7} /> <SlArrowRight size={7} />
            </div>
          </div>
        </Card>
      </div>
      <div size="small">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingTop: "1rem",
          }}
        >
          <div>Real-Time</div>
          <div>
            <Button
              type="primary"
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <AiFillEye style={{ gap: "10px" }} />
              View
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
          gap: "10px",
        }}
      >
        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <div className="cardWidget" style={{ backgroundColor: "#bfcfff" }}>
              <div className="reactIcon">
                {" "}
                <FaUserGroup
                  size={20}
                  display="center"
                  style={{ color: "#809fff" }}
                />
              </div>
            </div>
            <div style={{}}>
              <div className="cardTitle">Total Team Members</div>
              <div className="cardNumber">10</div>
            </div>
          </div>
          <div
            className="cardTitle"
            style={{ display: "flex", gap: "10px", paddingTop: "0.5rem" }}
          >
            <div style={{ color: "lightgreen" }}>
              <FaArrowTrendUp />
            </div>
            <div style={{ color: "lightgreen" }}>8.5%</div>
            <div style={{}}>Up from yesturday</div>
          </div>
        </Card>

        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <div className="cardWidget" style={{ backgroundColor: "#fff1bf" }}>
              <div className="reactIcon">
                {" "}
                <IoCubeSharp
                  size={20}
                  display="center"
                  style={{ color: "#ffa500" }}
                />
              </div>
            </div>
            <div style={{}}>
              <div className="cardTitle">Active Members</div>
              <div className="cardNumber">120</div>
            </div>
          </div>
          <div
            className="cardTitle"
            style={{ display: "flex", gap: "10px", paddingTop: "0.5rem" }}
          >
            <div style={{ color: "red" }}>
              <FaArrowTrendDown />
            </div>
            <div style={{ color: "red" }}>4.3%</div>
            <div style={{}}>Down from yesturday</div>
          </div>
        </Card>

        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <div className="cardWidget" style={{ backgroundColor: "#80ff80" }}>
              <div className="reactIcon">
                <BsGraphUp
                  size={15}
                  display="center"
                  style={{ color: "#008000" }}
                />
              </div>
            </div>
            <div style={{}}>
              <div className="cardTitle">On Break</div>
              <div className="cardNumber">05</div>
            </div>
          </div>
          <div
            className="cardTitle"
            style={{ display: "flex", gap: "10px", paddingTop: "0.5rem" }}
          >
            <div style={{ color: "red" }}>
              <FaArrowTrendDown />
            </div>
            <div style={{ color: "red" }}>4.3%</div>
            <div style={{}}>Down from yesturday</div>
          </div>
        </Card>

        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <div className="cardWidget" style={{ backgroundColor: "#fff1bf" }}>
              <div className="reactIcon">
                {" "}
                <IoCubeSharp
                  size={20}
                  display="center"
                  style={{ color: "#ffa500" }}
                />
              </div>
            </div>
            <div style={{}}>
              <div className="cardTitle">Clocked out Members</div>
              <div className="cardNumber">10</div>
            </div>
          </div>
          <div
            className="cardTitle"
            style={{ display: "flex", gap: "10px", paddingTop: "0.5rem" }}
          >
            <div style={{ color: "red" }}>
              <FaArrowTrendDown />
            </div>
            <div style={{ color: "red" }}>4.3%</div>
            <div style={{}}>Down from yesturday</div>
          </div>
        </Card>

        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <div className="cardWidget" style={{ backgroundColor: "#ffc680" }}>
              <div className="reactIcon">
                {" "}
                <PiClockCounterClockwiseBold
                  size={20}
                  display="center"
                  style={{ color: "#ffa333" }}
                />
              </div>
            </div>
            <div style={{}}>
              <div className="cardTitle">Total Team Members</div>
              <div className="cardNumber">10</div>
            </div>
          </div>
          <div
            className="cardTitle"
            style={{ display: "flex", gap: "10px", paddingTop: "0.5rem" }}
          >
            <div style={{ color: "lightgreen" }}>
              <FaArrowTrendUp />
            </div>
            <div style={{ color: "lightgreen" }}>8.5%</div>
            <div style={{}}>Up from yesturday</div>
          </div>
        </Card>
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
                        <Image src={natureImage} />
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
                  renderItem={(item) => (
                    <List.Item key={item.id}>
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
              <div style={{height:"300px", width:"100%",display:"flex",justifyContent:"center"}}>
              <div className="container1">
      <div className="chart-container1">
        <Bar style={{height:"200px",}} data={data} options={options} />
      </div>
    </div>
              </div>
            </Card>
          </Col>
        </Row>
       
      </div>
      <div style={{paddingTop:"1rem"}}>
        <Table columns={columns} dataSource={tabledata} />;
        </div>
    </div>
  );
}

export default DashboardWidget;
