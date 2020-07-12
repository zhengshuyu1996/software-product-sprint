// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let 

/**
 * Adds a hello message to the page.
 */
function getHello() {
    fetch('/data')
    .then(response => response.json())
    .then((data) => {
        console.log("startTime: ", data.startTime);
        console.log("currentTime: ", data.currentTime);
        console.log("maxMemory: ", data.maxMemory);
        console.log("usedMemory: ", data.usedMemory);
        document.getElementById('comment-list').innerText = data.startTime;
  });
}