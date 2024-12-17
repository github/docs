<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GitHub Projects V2</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .floating-icon {
            animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        .pulse-button {
            animation: pulse 2s infinite;
        }
    </style>
</head>
<body class="bg-gray-100 text-gray-900">
    <div class="container mx-auto px-4 py-8">
        <header class="text-center mb-12">
            <h1 class="text-5xl font-bold mb-4 text-blue-600 flex items-center justify-center">
                <svg class="w-16 h-16 mr-4 floating-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0L1 9h22L12 0zm0 3.84L17.65 9H6.35L12 3.84zM2 10v12h20V10h-2v10h-4v-6H8v6H4V10H2z"/>
                </svg>
                GitHub Projects V2 
                <span class="ml-4 text-3xl">🚀</span>
            </h1>
            <p class="text-xl text-gray-600 mb-6">Adaptive Project Management for Modern Teams</p>
        </header>

        <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h2 class="text-2xl font-semibold mb-4 text-blue-500">🔧 Flexible Customization</h2>
                <ul class="space-y-2">
                    <li>✨ Dynamic View Creation</li>
                    <li>📊 Advanced Filtering</li>
                    <li>🏷️ Custom Metadata Fields</li>
                </ul>
                <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded pulse-button hover:bg-blue-600">
                    Learn More
                </button>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h2 class="text-2xl font-semibold mb-4 text-green-500">🔄 Real-Time Sync</h2>
                <ul class="space-y-2">
                    <li>⚡ Instant Updates</li>
                    <li>🔗 Direct Issue Connections</li>
                    <li>🎯 Drag-and-Drop Management</li>
                </ul>
                <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded pulse-button hover:bg-green-600">
                    See Workflows
                </button>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h2 class="text-2xl font-semibold mb-4 text-purple-500">🤖 Smart Automation</h2>
                <ul class="space-y-2">
                    <li>🔮 Predictive Workflows</li>
                    <li>🚦 Automatic Archiving</li>
                    <li>🔌 API & Actions Integration</li>
                </ul>
                <button class="mt-4 bg-purple-500 text-white px-4 py-2 rounded pulse-button hover:bg-purple-600">
                    Explore Automation
                </button>
            </div>
        </div>

        <div class="mt-12 text-center">
            <h2 class="text-3xl font-bold mb-6">Quick Access 🔍</h2>
            <div class="flex justify-center space-x-4">
                <a href="#" class="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-all">
                    <i class="fab fa-github mr-2"></i>Create Project
                </a>
                <a href="#" class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-all">
                    <i class="fas fa-book-open mr-2"></i>Documentation
                </a>
                <a href="#" class="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition-all">
                    <i class="fas fa-video mr-2"></i>Video Tutorials
                </a>
            </div>
        </div>

        <footer class="mt-12 text-center text-gray-600">
            <div class="flex justify-center space-x-4 mb-4">
                <a href="#" class="text-blue-500 hover:text-blue-700"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="#" class="text-blue-800 hover:text-blue-900"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="#" class="text-purple-500 hover:text-purple-700"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="#" class="text-gray-800 hover:text-black"><i class="fab fa-github fa-2x"></i></a>
            </div>
            <p>© 2024 GitHub Projects V2. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
