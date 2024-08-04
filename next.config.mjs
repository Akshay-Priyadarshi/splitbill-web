import withPWAInit from "@ducanh2912/next-pwa"

const isProd = process.env.NODE_ENV === "production"

const withPWA = withPWAInit({
    dest: "public"
    // disable: !isProd
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgo: false
                    }
                }
            ]
        })

        return config
    }
}

export default withPWA(nextConfig)
