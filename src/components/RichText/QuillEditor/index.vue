<template>
    <section class="quill_editor_wrap">
        <quill-editor :options="editorOptions" contentType="html" ref="qeditor" @textChange="textChange"></quill-editor>
    </section>
</template>

<script setup name="Editor">
import { ref, defineProps, defineEmits } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';

import 'quill/dist/quill.core.css';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import "./font.scss"

let fonts = ['Microsoft-YaHei', 'SimHei', 'SimSun', 'KaiTi', 'FangSong', 'Arial', 'sans-serif']

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);
const qeditor = ref(null);

const textChange = () => {
    const editHTML = qeditor.value?.getHTML();  // 获取 Quill 实例的 HTML 内容
    if (editHTML) {
        emit('update:modelValue', editHTML);     // 发出事件更新父组件
    }
}

const editorOptions = {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
            ["bold", "italic", "underline", "strike"], // 加粗，斜体，下划线，删除线
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ["blockquote", "code-block"], // 引用，代码块
            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ script: "sub" }, { script: "super" }], // 上下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ direction: "rtl" }], // 文本方向
            //   [{ size: ["small", false, "large", "huge"] }], // 字体大小
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: fonts }], //字体
            [{ align: [] }], //对齐方式
            ["clean"], //清除字体样式
            ["image", "video"], //上传图片、上传视频
        ],
    },
    placeholder: '请输入内容...'
}
</script>

<style lang="scss" scoped>
.quill_editor_wrap {
    background: #fff;

    ::v-deep(.ql-editor) {
        height: 300px;
    }
}
</style>