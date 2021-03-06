import React, {useState, useEffect} from 'react'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Card, Table, Menu, Input, Button, message} from 'antd';
import Flex from 'components/shared-components/Flex'
import AvatarStatus from 'components/shared-components/AvatarStatus';
import utils from 'utils'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import { Link } from "react-router-dom";
import {
	EyeOutlined,
  SearchOutlined,
  EditOutlined,
	DeleteOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import axios from "axios";

const PresetModule = () => {
    const teacherId = localStorage.getItem("tid");

    const [presetModules, setPresetModules] = useState([]);
    const [presetModulesList, setPresetModulesList] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [deletedMessage, setDeletedMessage] = useState("");

    const menu_icons_style = {
      display: "inline-flex",
      paddingRight: "5px"
    }

    useEffect(() => {
        axios.get("/api/module/get-preset-modules").then((response) => {
          console.log(response.data)
            setPresetModules(response.data)
            setPresetModulesList(response.data)
            setIsLoading(false);
          }).catch(() => {
            message.error("Could not fetch the data in the server!")
          });
    }
    , []);

    const deletePresetModule = (presetModuleId, moduleName) => {
      message.loading("Deleting " + moduleName + "...", 0)
      
      axios.post("/api/module/delete-preset-module", {"_id": presetModuleId}).then((response) => {
        if(response.data == "Deleted"){
          message.destroy()
          setPresetModulesList(
            presetModulesList.filter((presetModule) => presetModule._id !== presetModuleId)
            )
          message.success(moduleName + " has been successfully deleted")
        }else{
          message.destroy()
          message.error("The action can't be completed, please try again.")
        }
      }).catch(error => {
          console.log(error)
          message.destroy()
          message.error("The action can't be completed, please try again.")
      });

    }

    const tableColumns = [
        {
            title: 'Module Name',
            dataIndex: 'module_name',
            render: (_, result) => (
                <span>{result.module_name}</span>
            )
        },
        {
          title: 'Topic',
          dataIndex: 'topic',
          render: (_, result) => (
              <span>{result.topic}</span>
          )
        },
        {
          title: 'Classwork Code',
          dataIndex: 'classwork_code',
          render: (_, result) => (
              <span>{(result.classwork_code == "" ? "None": result.classwork_code)}</span>
          )
        },
        {
          title: 'Lesson Count',
          dataIndex: 'lesson_count',
          render: (_, result) => (
              <span>{result.lesson_count}</span>
          )
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, result) => (
                <EllipsisDropdown 
            menu={
                <Menu>
                    {/* <Menu.Item key="0">
                        <Link to={`classroom/${result._id}`}>
                            <EyeOutlined style={menu_icons_style}/>
                            <span className="ml-2">View</span>
                        </Link>
                    </Menu.Item> */}
                    <Menu.Item key="0">
                        <Link to={`module/edit-preset-module/${result._id}`}>
                            <EditOutlined style={menu_icons_style}/>
                            <span className="ml-2">Edit</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="1" onClick={() => downloadModule(result._id)}>
                        <>
                            <DownloadOutlined style={menu_icons_style}/>
                            <span className="ml-2">Download PDF</span>
                        </>
                    </Menu.Item>
                    <Menu.Divider/>
                    <Menu.Item key="2" onClick={() => deletePresetModule(result._id, result.module_name)}>
                        <>
                            <DeleteOutlined style={menu_icons_style}/>
                            <span className="ml-2">Delete</span>
                        </>
                    </Menu.Item>
                </Menu>
            }
        />
            )
        }
      ]

    const onMyModulesSearch = (e) => {
        const value = e.currentTarget.value;
        const searchArray = e.currentTarget.value ? presetModulesList : presetModules;
        const data = utils.wildCardSearch(searchArray, value);
        setPresetModulesList(data);
    };

    const downloadModule = (presetModuleId) => {
      console.log("Downloading");
      window.location.assign(
        "https://biology-server.herokuapp.com/api/module/download-preset-module/" + presetModuleId,
        "_blank"
      );

      // window.location.assign(
      //   "http://localhost:5000/api/module/download-preset-module/" + presetModuleId,
      //   "_blank"
      // );
    }
    
  return (
    <>
        <Card title="Preset Modules" extra={
        <>
            <Link to="module/create-preset-module">
                <Button type="primary" style={{backgroundColor: "green", borderColor: "green"}}>New Modules</Button>
            </Link>
        </>}>
            <Flex
            alignItems="center"
            className=""
            justifyContent="between"
            mobileFlex={false}
            >
            <Flex className="mb-1" mobileFlex={false}>
                <div className="mb-3 mr-md-3">
                <Input
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                    onChange={(e) => onMyModulesSearch(e)}
                />
                </div>
            </Flex>
            </Flex>
            <Table
                pagination={true}
                columns={tableColumns} 
                dataSource={presetModulesList} 
                rowKey='_id'
                loading={isLoading}
                scroll={{ x: "max-content" }}
            />
        </Card>
    </>
  )
}

export default PresetModule;