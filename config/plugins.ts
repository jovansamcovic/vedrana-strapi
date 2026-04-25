export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "placeholder"),
        api_key: env("CLOUDINARY_KEY", "placeholder"),
        api_secret: env("CLOUDINARY_SECRET", "placeholder"),
      },
    },
  },
});