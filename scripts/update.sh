# setup release files
deno task tauri build --runner cargo-xwin --target x86_64-pc-windows-msvc

cp "./src-tauri/target/x86_64-pc-windows-msvc/release/cum-clicker.exe" "/mnt/c/Users/paulp/AppData/Local/Cum Clicker/cum-clicker.exe"