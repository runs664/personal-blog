export default function Hero() {
    return (
        <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
            <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video
                autoPlay={true}
                loop={true}
                muted={true}
                className="min-w-full min-h-full absolute object-cover z-[2]"
                >
                <source
                src="/ContinuousMotionPer4.mp4"
                type="video/mp4"
                />
                </video>
            </div>
            <div class="video-content space-y-2">
                <h1 class="roman">full Hero Video</h1>
                <h3 class="font-light text-3xl">with TailwindCSS</h3>
            </div>
        </section>
    );
}