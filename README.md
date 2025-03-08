# scape.js
A JavaScript package 📦 
<!-- Introduction -->
<section class="container mx-auto px-6 py-10 fade-in">
        <h2 class="text-4xl font-bold mb-8">What Is This?</h2>
        <p class="text-lg text-gray-300 leading-relaxed">
            The <b>Scape.js</b> is a lightweight JavaScript package that allows you
            to create beautiful, animated backgrounds for your website. Whether you
            want floating shapes or custom images, this package has you covered.
        </p>
    </section>

<section class="container mx-auto px-6 py-10 fade-in">
        <h2 class="text-4xl font-bold mb-8">How It Works</h2>
        <p class="text-lg text-gray-300 leading-relaxed">
            The package dynamically generates shapes or images and animates them
            across the screen. You can customize the type, size, color, and
            animation of the elements.
        </p>
        <pre class="bg-gray-800 p-6 rounded-lg mt-8 text-sm">
      <code class="text-gray-300 text-wrap">
// Example Configuration
window.ScapeConfig = {
  type: 'shape', // 'image' or 'shape'
  shape: 'star', // Shape type
  count: 30, // Number of elements
  size: 10, // Size of each element
  fillColor: 'hsla(200, 90%, 60%, 0.8)', // Fill color
  strokeColor: 'rgba(255, 255, 255, 0.5)', // Stroke color
  strokeWidth: 2, // Stroke width
};
      </code>
    </pre>
    </section>

<section class="container mx-auto px-6 py-16 fade-in" id="implementation">
        <h2 class="text-4xl font-bold mb-8">How to Implement</h2>
        <p class="text-lg text-gray-300 leading-relaxed">
            Follow these steps to add the <b>Scape.js</b> to your website:
        </p>
        <ol class="list-decimal list-inside mt-4 text-lg text-gray-300">
            <li class="mb-4">Include the script in your HTML file:</li>
            <pre class="bg-gray-800 p-6 rounded-lg mt-2 text-sm">
        <code class="text-gray-300 text-wrap">
&lt;script src="https://ali-cheikh.github.io/scape.js"&gt;&lt;/script&gt;
&lt;script src="config.js"&gt;&lt;/script&gt;
        </code>
      </pre>
            <li class="mb-4">
                Create a `config.js` file to customize the background:
            </li>
            <pre class="bg-gray-800 p-6 rounded-lg mt-2 text-sm">
        <code class="text-gray-300 text-wrap">
window.ScapeConfig = {
  type: 'shape',
  shape: 'star',
  count: 30,
  size: 100,
  fillColor: 'hsla(200, 90%, 60%, 0.8)',
  strokeColor: 'rgba(255, 255, 255, 0.5)',
  strokeWidth: 2,
};
        </code>
      </pre>
            <li class="mb-4">
                Add the following CSS to your project (optional for animations):
            </li>
            <pre class="bg-gray-800 p-6 rounded-lg mt-2 text-sm">
        <code class="text-gray-300 text-wrap">
@keyframes float {
  0% { transform: translate(0, 0) rotate(var(--rotation)); }
  50% { transform: translate(0, 30px) rotate(var(--rotation)); }
  100% { transform: translate(0, 0) rotate(var(--rotation)); }
}
        </code>
      </pre>
        </ol>
    </section>