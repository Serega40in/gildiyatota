<template>
    <div id="telcomment">
    </div>
</template>

<script>
    export default {
        created() {
            setTimeout(function () {
                let ckeditor = document.createElement('script');
                ckeditor.setAttribute('src', "https://comments.app/js/widget.js?2");
                ckeditor.setAttribute('data-comments-app-website', "KbxryAyj");
                ckeditor.setAttribute('data-limit', "5");
                ckeditor.setAttribute('data-color', "CA9C0E");
                ckeditor.setAttribute('data-outlined', "1");
                ckeditor.setAttribute('data-colorful', "1");
                let divTelComm = document.getElementById('telcomment')
                divTelComm.appendChild(ckeditor)
            }, 1)
        }
    }
</script>

<style>
#comments-app-KbxryAyj-1{
      border-radius: 13px!important;
  }
</style>
