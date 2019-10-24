let edit = '';
let main = new function () {
    this.name = [{name: "Apple", src: "apple.jpeg"}, {name: "Sony", src: "sony.jpg"}, {name:"Xiaomi",src:"xiaomi.png"}];
    this.productTable = function () {
        let table = '';
        for (i = 0; i < this.name.length; i++) {
            table += '<tr>';
            table += '<td>' + this.name[i].name + '</td>';
            table += '<td><img src="'+this.name[i].src+'" height="217" width="232"/></td>';
            table += '<td><button onclick="main.editProduct(' + i + ')">Edit</button></td>';
            table += '<td><button onclick="main.deleteProduct(' + i + ')">Delete</button></td>';
            table += '</tr>';

        }
        document.getElementById('idoutput').innerHTML = table;
    };
    this.addproducttable = function () {
        document.getElementById('iddivadd').style.display = 'block';
    };

    this.addProduct = function () {
      let name = document.getElementById('idinput');
      let img = document.getElementById('idImage');
      let reader = new FileReader();
      reader.readAsDataURL(img.files[0]);
      reader.onload = function (e) {
          main.name.push({name:name.value,src:e.target.result});
          document.getElementById('idaddtable').style.display = 'block';
          document.getElementById('iddivadd').style.display = 'none';
          main.productTable();
      }
    };
    this.editProduct = function (i) {
        document.getElementById('iddivedit').style.display = 'block';
        edit = i;
        document.getElementById('idEdit').focus();
    };
    this.saveEdit = function () {
        let name = document.getElementById('idEdit');
        let img = document.getElementById('ideditImage');
        let reader = new FileReader();
        reader.readAsDataURL(img.files[0]);
        reader.onload = function (e) {
            main.name[edit] = {name: name.value, src: e.target.result};
            document.getElementById('iddivedit').style.display = 'none';
            main.productTable();
        }
    };
    this.deleteProduct = function (a) {
        for (i=0;i<main.name.length;i++) {
            this.name[a] = this.name[a+1];
            this.name.pop();
            main.productTable();
        }
    }
};
main.productTable();