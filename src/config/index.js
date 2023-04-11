/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || "prod";
const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi:
      "https://www.fastmock.site/mock/7241db4cca841e04926cc621e31fcf3c/_mwl_manage",
  },
  test: {
    baseApi: "//test.future.com.api",
    mockApi:
      "https://www.fastmock.site/mock/7241db4cca841e04926cc621e31fcf3c/_mwl_manage",
  },
  prod: {
    baseApi: "//featur.com/api",
    mock: "https://www.fastmock.site/mock/7241db4cca841e04926cc621e31fcf3c/_mwl_manage",
  },
};

export default {
  env,
  mock: true,
  ...EnvConfig[env],
};
