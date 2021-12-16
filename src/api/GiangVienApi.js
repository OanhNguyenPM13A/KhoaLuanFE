import axios from 'axios';
import { BASE_URL_API } from "./../constants/ApiConstant";
import axiosClient from "./axiosClient"

const getLopHocApi = async (page) => {
  // http://localhost:8080/api/solienlacdientu/v1/giangvien/1/danhsachlophoc
  return (await axiosClient(page))({
    method: 'GET',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${localStorage.getItem("id")}/danhsachlophoc`,
    params: { page: page, size: 10 }

  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

const getLopHocPhanApi = async (page) => {
  // http://localhost:8080/api/solienlacdientu/v1/giangvien/1/danhsachlophoc
  return (await axiosClient(page))({
    method: 'GET',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${localStorage.getItem("id")}/danhsachlophocphan`,
    params: { page: page, size: 10 }

  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};



const getSinhVienLopHocApi = async (idLopHoc,page) => { 
  return (await axiosClient(page))({
    method: 'GET',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${idLopHoc}/sinhvien`,
    params: { page: page, size: 5 }

  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};


const getThongBaotSinhVienLopHocApi = async (idLopHoc,page) => { 
  return (await axiosClient(page))({
    method: 'GET',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${localStorage.getItem("id")}/${idLopHoc}/thongbaolop`,
    params: { page: page, size: 8 }

  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

const addThongBaoLopHocApi = async (idLopHoc,data)=>{
  return (await axiosClient())({
    method: 'POST',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${localStorage.getItem("id")}/${idLopHoc}/thongbaolop`, 
    data:data

  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}


const editThongBaoLopHocApi = async (idThongBao,data)=>{
  return (await axiosClient())({
    method: 'PUT',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${idThongBao}/thongbaolop`, 
    data:data

  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}



const editDisplayThongBaoLopHocApi = async (idThongBao)=>{
  return (await axiosClient())({
    method: 'PUT',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${idThongBao}/thongbaolop/hienthi`,  
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}



const getListCanhBaoSinhVienApi = async (idSinhVien)=>{
  return (await axiosClient())({
    method: 'GET',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${localStorage.getItem("id")}/${idSinhVien}/canhbao`,  
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}


const guiCanhBaoSinhVienApi = async (data)=>{
  return (await axiosClient())({
    method: 'POST',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/canhbao`,  
    data:data
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}


const getSinhVienLopHocPhanApi = async (idLopHocPhan,page)=>{
  return (await axiosClient())({
    method: 'GET',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${idLopHocPhan}/lophocphan/sinhvien`,  
    params: { page: page, size: 10 }
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}
///{idBangDiem}/monhoc/bangdiem

const putBangDiemSinhVienMonHocApi = async (idBangDiem,data)=>{
  return (await axiosClient())({
    method: 'PUT',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${idBangDiem}/monhoc/bangdiem`,   
    data:data
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}


const diemDanhApi = async (idSinhVien,idLopHocPhan,data)=>{
  return (await axiosClient())({
    method: 'POST',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${idSinhVien}/${idLopHocPhan}/diemdanh`,   
    data:data
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}




const getNgayNghiSinhVienApi = async (idSinhVienLopHocPhan)=>{
  return (await axiosClient())({
    method: 'GET',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${idSinhVienLopHocPhan}/ngaynghis`,    
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

const xoaNgayNghiSinhVienApi = async (id)=>{
  return (await axiosClient())({
    method: 'DELETE',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/ngaynghis/${id}`,    
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

export {
  getLopHocApi,
  getSinhVienLopHocApi,
  getThongBaotSinhVienLopHocApi,
  addThongBaoLopHocApi,
  editThongBaoLopHocApi,
  editDisplayThongBaoLopHocApi,
  getListCanhBaoSinhVienApi,
  guiCanhBaoSinhVienApi,
  getLopHocPhanApi,
  getSinhVienLopHocPhanApi,
  putBangDiemSinhVienMonHocApi,
  diemDanhApi,
  getNgayNghiSinhVienApi,
  xoaNgayNghiSinhVienApi
}