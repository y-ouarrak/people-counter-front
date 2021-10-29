<template>
  <div>
    <Breadcrumbs main="Users" title="Edit Profile" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="edit-profile">
        <div class="row">
          <div class="col-xl-4">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title mb-0">My Profile</h4>
                <div class="card-options">
                  <a
                    class="card-options-collapse"
                    href="#"
                    data-toggle="card-collapse"
                    ><i class="fe fe-chevron-up"></i></a
                  ><a
                    class="card-options-remove"
                    href="#"
                    data-toggle="card-remove"
                    ><i class="fe fe-x"></i
                  ></a>
                </div>
              </div>
              <div class="card-body">
                <form>
                  <div class="row mb-2">
                    <div class="col-auto">
                      <img
                        class="img-70 rounded-circle"
                        alt=""
                        src="../../assets/images/user/7.jpg"
                      />
                    </div>
                    <div class="col">
                      <h3 class="mb-1">{{ firstName }} {{ lastName }}</h3>
                      <p class="mb-4">{{ role }}</p>
                    </div>
                  </div>
                  <!-- <div class="form-group">
                          <h6 class="form-label">Bio</h6>
                          <textarea class="form-control" rows="5">On the other hand, we denounce with righteous indignation</textarea>
                        </div>
                        <div class="form-group">
                          <label class="form-label">Email-Address</label>
                          <input class="form-control" placeholder="your-email@domain.com">
                        </div>
                        <div class="form-group">
                          <label class="form-label">Password</label>
                          <input class="form-control" type="password" value="password">
                        </div>
                        <div class="form-group">
                          <label class="form-label">Website</label>
                          <input class="form-control" placeholder="http://Uplor .com">
                        </div>
                        <div class="form-footer">
                          <button class="btn btn-primary btn-block">Save</button>
                        </div> -->
                </form>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <form class="card">
              <div class="card-header">
                <h4 class="card-title mb-0">Edit Profile</h4>
                <div class="card-options">
                  <a
                    class="card-options-collapse"
                    href="#"
                    data-toggle="card-collapse"
                    ><i class="fe fe-chevron-up"></i></a
                  ><a
                    class="card-options-remove"
                    href="#"
                    data-toggle="card-remove"
                    ><i class="fe fe-x"></i
                  ></a>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6 col-md-4">
                    <div class="form-group">
                      <label class="form-label">First Name</label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="firstName"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <div class="form-group">
                      <label class="form-label">Last Name</label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="lastName"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <div class="form-group">
                      <label class="form-label">Email address</label>
                      <input
                        class="form-control"
                        type="email"
                        v-model="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-right">
                <button class="btn btn-primary" type="submit">
                  Update Information
                </button>
              </div>
            </form>
            <div>
              <div class="col-md-6 col-md-12 text-left">
                <button
                  v-b-modal.modal-customizer
                  class="btn btn-danger plus-popup mt-2"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->

    <!-- Changing password Modal -->
    <b-modal
      id="modal-customizer"
      title="Changing Password"
      class="theme-modal"
    >
      <div class="modal-header modal-copy-header">
        <!-- <h5 class="headerTitle mb-0">Change your password</h5> -->
      </div>
      <div class="modal-body">
        <div class="config-popup">
          <div>
            <form action="">
              <div class="row">
                <div class="col-sm-12 col-md-12">
                  <div class="form-group">
                    <label class="form-label">Current password</label>
                    <input
                      class="form-control"
                      type="password"
                      v-model="currentPassword"
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12">
                  <div class="form-group">
                    <label class="form-label">New Password</label>
                    <input
                      class="form-control"
                      type="password"
                      v-model="newPassword"
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12">
                  <div class="form-group">
                    <label class="form-label">Confirm new password</label>
                    <input
                      class="form-control"
                      type="password"
                      v-model="confirmNewPassword"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        role: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      };
    },
    created() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.firstName = user.user.firstName;
      this.lastName = user.user.lastName;
      this.role = user.user.role;
      this.email = user.user.email;
    },
    methods: {
      changePassword() {

      },
      updateInfo() {
        
      }
    }
  };
</script>