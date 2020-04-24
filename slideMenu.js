function toggleSidebar() {
    //document.getElementById('sidebar').classList.toggle('active');
    
    if(document.getElementById('sidebar').style.left=='0px'){
        document.getElementById('sidebar').style.left='-200px';
    }
    else {
    document.getElementById('sidebar').style.left='0px';
}
}
