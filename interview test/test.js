var datas = [
    { id: 1, name: '流程管理', parent_id: 0 },
    { id: 2, name: '请假流程', parent_id: 1 },
    { id: 3, name: '报销流程', parent_id: 1 },
    { id: 4, name: '借款流程', parent_id: 1 },
    { id: 5, name: '备用金流程', parent_id: 4 },
    { id: 6, name: '系统管理', parent_id: 0 },
    { id: 7, name: '用户管理', parent_id: 6 },
    { id: 8, name: '角色管理', parent_id: 6 },
];
function format(data) {
    var newData = [];
    /**递归处理 */
    function recursion(datas, target) {
        datas.forEach(function (ele) {
            if (ele.id === target.parent_id) {
                if (ele === null || ele === void 0 ? void 0 : ele.children) {
                    ele.children.push(target);
                }
                else {
                    ele.children = [];
                    ele.children.push(target);
                }
                return;
            }
            else if (ele === null || ele === void 0 ? void 0 : ele.children) {
                recursion(ele.children, target);
            }
            else {
                //找不到父类报错
                Error("未找到父类");
            }
        });
    }
    data.forEach(function (element) {
        if (element.parent_id === 0) {
            newData.push(element);
        }
        else {
            recursion(newData, element);
        }
    });
    return newData;
}
var store = format(datas);
console.log(store);
