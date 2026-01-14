'use client';

export default function FavoriteSong() {
    return (
        <section className="w-[90%] mx-auto mt-16 overflow-x-hidden">
            <h2 className="text-2xl font-bold mb-4 md:pl-15">My Favorite Songs</h2>
            <div className="flex gap-4 md:flex-row flex-col">
                <div className="w-full md:pl-15">
                    <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/3be9ACTxtcL6Zm4vJRUiPG?utm_source=generator" width="100%" height="100" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>

                <div className="w-full md:pr-25">
                    <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/2CFpkbOfYe23ZoMfufNKVB?utm_source=generator" width="100%" height="100" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </section>
    );
}