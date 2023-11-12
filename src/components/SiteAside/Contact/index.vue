<!--
 * @Author: csh
 * @Date: 2023-11-06 22:01:28
 * @LastEditors: csh
 * @LastEditTime: 2023-11-13 00:02:29
 * @FilePath: /csh-plugin/Users/csh/my-site/src/components/SiteAside/Contact/index.vue
 * @Description: 
-->
<template>
    <div class="contact-container">
        <ul>
            <li>
                <a href="tencent://message/?Menu=yes&uin=2357519669 &Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                    <div class="icon">
                        <Icon type="qq" />
                    </div>
                    <span>2357519669</span>
                </a>
                <div class="pop">
                    <img src="" alt="" />
                </div>
            </li>
            <li>
                <a>
                    <div class="icon">
                        <Icon type="weixin" />
                    </div>
                    <span>123221321</span>
                </a>
                <div class="pop">
                    <img src="" alt="" />
                </div>
            </li>
            <li>
                <a href="mailto:2357519669@qq.com">
                    <div class="icon">
                        <Icon type="mail" />
                    </div>
                    <span>2357519669@qq.com</span>
                </a>
                <div class="pop">
                    <img src="" alt="" />
                </div>
            </li>
            <li>
                <a>
                    <div class="icon">
                        <Icon type="github" />
                    </div>
                    <span>178XXXXXXXX</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components: { Icon },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";

.contact-container {
    margin: 0;
    color: @gray;
    @itemHeight: 30px;
    li {
        height: @itemHeight;
        line-height: 30px;
        list-style: none;
        margin: 14px 0;
        position: relative;
        &:hover {
            .pop {
                transform: scaleY(1);
            }
        }
        a {
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 14px;

            .icon {
                font-size: 26px;
                width: 36px;
            }
        }
        .pop {
            position: absolute;
            left: 0;
            bottom: @itemHeight;
            background: white;
            padding: 20px;
            transform: scaleY(0);
            transform-origin: center bottom;
            transition: 0.3s;
            img {
                width: 150px;
                height: 150px;
            }
            &::after {
                content: "";
                position: absolute;
                width: 8px;
                height: 8px;
                left: 50%;
                transform: translateX(-50%) rotate(45deg);
                background: white;
                bottom: -4px;
            }
        }
    }
}
</style>