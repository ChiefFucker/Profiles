# > Youku
const url = $request.url;
if (!$response.body) $done({});
const isYK = url.includes("youku.com/");
let obj = JSON.parse($response.body);
if (isYK) {
  if (url.includes("/collect-api/get_push_interval_config_wx?")) {
    if (obj?.data) {
      const item = ["tipContent", "tipContentNew"];
      for (let i of item) {
        delete obj.data[i];
      }
    }
  } else if (url.includes("columbus.gateway.new.execute")) {
    if (obj?.data?.["2019030100"]?.data) {
      let objData = obj.data["2019030100"].data;
      if (objData?.data?.global) {
        let config = objData.data.global;
        if (config?.PHONE_DETAIL_TOP_TAB?.pageTabs?.length > 0) {
          config.PHONE_DETAIL_TOP_TAB.pageTabs =
            config.PHONE_DETAIL_TOP_TAB.pageTabs.filter((i) =>
              ["detail", "planet"]?.includes(i?.code)
            );
        }
      }
      if (objData?.nodes?.length > 0) {
        if (objData?.nodes?.length === 1) {
          let node0 = objData.nodes[0];
          if (node0?.nodes?.length > 0) {
            if (node0?.typeName === "NORMAL") {
              node0.nodes = node0.nodes.filter(
                (i) =>
                  ![
                    "PHONE_CHD_AGE_DETAIL_2",
                    "PHONE_CHILD_SERIES_A",
                    "PHONE_CHILD_STAR_A",
                    "PHONE_DEFALT_SCROLL_C",
                    "Phone运营banner",
                    "播放页触达组件",
                    "播放页广告组件",
                    "播放页会员引导组件",
                    "播放页活动组件",
                    "播放页全屏播后推荐组件",
                    "播放页少儿品牌专区组件",
                    "播放页推荐组件",
                    "播放页用户触达组件",
                    "播放页有料不能停组件",
                    "球区自动化组件",
                    "优酷购"
                  ]?.includes(i?.typeName)
              );
            } else if (node0?.typeName === "FEED_CHILD_DRAWER_PAGINATION") {
              if (node0?.nodes) {
                node0.nodes = [];
              }
            } else if (node0?.typeName === "FEED_DRAWER_PAGINATION") {
              if (node0?.nodes) {
                node0.nodes = [];
              }
            }
          }
        } else {
          objData.nodes = [];
        }
      }
    }
  } else if (url.includes("columbus.home.feed/")) {
    if (obj?.data?.["2019061000"]?.data) {
      let objData = obj.data["2019061000"].data;
      if (objData?.nodes?.length > 0) {
        let newNodes = [];
        for (let item of objData.nodes) {
          if (item?.typeName === "PHONE_FEED_CARD_GROUP") {
            if (item?.nodes?.length > 0) {
              let newItems = [];
              for (let i of item.nodes) {
                if (i?.typeName === "PHONE_FEED_CARD_S_AD") {
                  continue;
                } else if (i?.typeName === "PHONE_H_UC_AD") {
                  continue;
                } else {
                  newItems.push(i);
                }
              }
              item.nodes = newItems;
              newNodes.push(item);
            } else {
              newNodes.push(item);
            }
          } else {
            newNodes.push(item);
          }
        }
        objData.nodes = newNodes;
      }
    }
  } else if (url.includes("columbus.home.query/")) {
    if (obj?.data?.["2019061000"]?.data) {
      let objData = obj.data["2019061000"].data;
      if (objData?.data?.indexPositionResult?.length > 0) {
        objData.data.indexPositionResult = [];
      }
      if (objData?.nodes?.length > 0) {
        let newNodes = [];
        for (let item of objData.nodes) {
          if (["CHILD", "COMIC2", "20230929GREATWORKMFK"]?.includes(item?.data?.nodeKey)) {
            continue;
          } else {
            if (item?.data?.indexPositionResult?.length > 0) {
              item.data.indexPositionResult = [];
            }
            if (item?.data?.refreshImg) {
              delete item.data.refreshImg;
            }
            if (item?.nodes?.length > 0) {
              let newItems = [];
              for (let i of item.nodes) {
                if (i?.data?.crmSale) {
                  delete i.data.crmSale;
                }
                if (["UC广告抽屉", "橱窗广告"]?.includes(i?.typeName)) {
                  continue;
                } else if (i?.id === 31476) {
                  if (i?.data?.keywords?.length > 0) {
                    delete i.data.keywords;
                  }
                } else if (i?.id === 35505) {
                  continue;
                } else if (i?.id === 37335) {
                  continue;
                } else {
                  if (i?.nodes?.length > 0) {
                    let newII = [];
                    for (let ii of i.nodes) {
                      if (
                        [
                          "PHONE_FEED_CARD_B_AD",
                          "PHONE_FEED_CARD_S_AD",
                          "PHONE_H_UC_AD",
                          "PHONE_IMG_A",
                          "PHONE_YK_AD_BANNER"
                        ]?.includes(ii?.typeName)
                      ) {
                        continue;
                      } else {
                        if (ii?.nodes?.length > 0) {
                          let newIII = [];
                          for (let iii of ii.nodes) {
                            if (iii?.typeName === "PHONE_FEED_CARD_S_AD") {
                              continue;
                            } else if (iii?.data?.hasOwnProperty("ad")) {
                              continue;
                            } else {
                              newIII.push(iii);
                            }
                          }
                          ii.nodes = newIII;
                          newII.push(ii);
                        } else {
                          newII.push(ii);
                        }
                      }
                    }
                    i.nodes = newII;
                    newItems.push(i);
                  } else {
                    newItems.push(i);
                  }
                }
              }
              item.nodes = newItems;
            }
            newNodes.push(item);
          }
        }
        objData.nodes = newNodes;
      }
    }
  } else if (url.includes("columbus.uc.query/")) {
    if (obj?.data?.["2019061000"]?.data) {
      let objData = obj.data["2019061000"].data;
      if (objData?.nodes?.length > 0) {
        let objNodes = objData.nodes[0];
        if (objNodes?.nodes?.length > 0) {
          let newNodes = [];
          for (let item of objNodes.nodes) {
            if (item?.id === 32133) {
              continue;
            } else if (item?.id === 32775) {
              continue;
            } else if (item?.id === 22570) {
              continue;
            } else if (item?.id === 28912) {
              if (item?.nodes?.length > 0) {
                let newII = [];
                for (let ii of item.nodes) {
                  if (ii?.id === 110429) {
                    continue;
                  }
                  newII.push(ii);
                }
                item.nodes = newII;
                newNodes.push(item);
              } else {
                newNodes.push(item);
              }
            } else if (item?.id === 35942) {
              continue;
            } else if (item?.id === 36014) {
              continue;
            } else if (item?.id === 36015) {
              if (item?.nodes?.length > 0) {
                let node0 = item.nodes[0];
                if (node0?.nodes?.length > 0) {
                  let newII = [];
                  for (let ii of node0.nodes) {
                    if ([683367, 683368, 683372, 683502]?.includes(ii?.id)) {
                      newII.push(ii);
                    }
                  }
                  node0.nodes = newII;
                  newNodes.push(item);
                } else {
                  newNodes.push(item);
                }
              } else {
                newNodes.push(item);
              }
            } else if (item?.id === 38466) {
              continue;
            } else {
              newNodes.push(item);
            }
          }
          objNodes.nodes = newNodes;
        }
      }
    }
  } else if (url.includes("columbus.ycp.query/")) {
    if (obj?.data?.["2019061000"]?.data) {
      let objData = obj.data["2019061000"].data;
      if (objData?.nodes?.length > 0) {
        let objNodes = objData.nodes[0];
        if (objNodes?.nodes?.length > 0) {
          let newNodes = [];
          for (let item of objNodes.nodes) {
            if (item?.id === 23242) {
              if (item?.nodes?.length > 0) {
                let newItems = [];
                for (let i of item.nodes) {
                  if (i?.typeName === "COMPONENT_YCP_NOTICE") {
                    continue;
                  } else if (i?.id === 113941) {
                    continue;
                  } else {
                    newItems.push(i);
                  }
                }
                item.nodes = newItems;
                newNodes.push(item);
              } else {
                newNodes.push(item);
              }
            } else if (item?.id === 23243) {
              if (item?.nodes?.length > 0) {
                let newItems = [];
                for (let i of item.nodes) {
                  if (i?.id === -1000) {
                    continue;
                  } else {
                    newItems.push(i);
                  }
                }
                item.nodes = newItems;
                newNodes.push(item);
              } else {
                newNodes.push(item);
              }
            } else {
              newNodes.push(item);
            }
          }
          objNodes.nodes = newNodes;
        }
      }
    }
  } else if (url.includes("haidai.lantern.appconfig.get/")) {
    if (obj?.data?.model?.configInfo?.bottomNavigate) {
      let bottom = obj.data.model.configInfo.bottomNavigate;
      if (bottom?.data?.bottomTabList?.length > 0) {
        bottom.data.bottomTabList = bottom.data.bottomTabList.filter((i) =>
          ["HOME", "NEW_UCENTER", "VIP_MEMBER"]?.includes(i?.type)
        );
        for (let i = 0; i < bottom.data.bottomTabList.length; i++) {
          bottom.data.bottomTabList[i].menuIndex = i + 1;
        }
      }
    }
  } else if (url.includes("huluwa.dispatcher.youthmode.config2/")) {
    if (obj?.data?.result) {
      obj.data.result = {};
    }
  } else if (url.includes("play.ups.appinfo.get/")) {
    if (obj?.data?.data) {
      const item = ["ad", "watermark", "ykad"];
      for (let i of item) {
        delete obj.data.data[i];
      }
    }
  } else if (url.includes("soku.yksearch/")) {
    if (obj?.data?.nodes?.length > 0) {
      obj.data.nodes = obj.data.nodes.filter((i) => i?.hasOwnProperty("data"));
    }
  }
}

$done({ body: JSON.stringify(obj) });
