import User from "../models/user.model.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render("index", {
      users,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Có lỗi xảy ra khi lấy danh sách người dùng." });
  }
};

const renderAddUserForm = (req, res) => {
  res.render("add");
};

const createNewUser = async (req, res) => {
  const { name, email, age, address } = req.body;
  const newUser = new User({ name, email, age, address });
  try {
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    res.status(400).send({ message: "Có lỗi xảy ra khi thêm người dùng." });
  }
};

const renderEditUserForm = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        message: "Người dùng không tồn tại.",
      });
    }
    res.render("edit", { user });
  } catch (error) {
    res.status(500).send("Có lỗi xảy ra khi hiển thị form chỉnh sửa.");
  }
};

const updateExistingUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send({ message: "Người dùng không tồn tại." });
    }
    res.redirect("/");
  } catch (error) {
    res.status(400).send({ message: "Có lỗi xảy ra khi cập nhật người dùng." });
  }
};

const deleteExistingUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send({ message: "Người dùng không tồn tại." });
    }
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Có lỗi xảy ra khi xóa người dùng." });
  }
};

export {
  getAllUsers,
  renderAddUserForm,
  createNewUser,
  renderEditUserForm,
  updateExistingUser,
  deleteExistingUser,
};
