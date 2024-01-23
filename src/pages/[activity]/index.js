import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const Activity = () => {
	const route = useRouter();
	const localVideoRef = useRef();
	const [isStreaming, setIsStreaming] = useState(false);

	useEffect(() => {
		const socket = io();

		const startStreaming = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
					audio: true,
				});
				localVideoRef.current.srcObject = stream;

				// Send the stream to other clients
				socket.emit("stream", stream);
			} catch (error) {
				console.error("Error accessing media devices:", error);
			}
		};

		// User interaction to start streaming
		const startButton = document.getElementById("startButton");
		if (startButton) {
			startButton.addEventListener("click", startStreaming);
		}

		socket.on("stream", (stream) => {
			// Receive and display the stream from other clients
			const remoteVideo = document.createElement("video");
			remoteVideo.srcObject = stream;
			document.body.appendChild(remoteVideo);
		});

		return () => {
			socket.disconnect();
		};
	}, []);

	return (
		<div>
			<h1>Local Video Streaming</h1>
			<video
				ref={localVideoRef}
				className='-scale-x-100  h-full'
				autoPlay
				playsInline
				muted
			></video>
			{isStreaming ? (
				<button id='stopButton'>Stop Streaming</button>
			) : (
				<button id='startButton'>Start Streaming</button>
			)}
		</div>
	);
};

export default Activity;
