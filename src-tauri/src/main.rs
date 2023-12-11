


fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
#[tauri::command]
fn greet(name: &str)-> String{
  format!("Welcome, {}!", name)
}

